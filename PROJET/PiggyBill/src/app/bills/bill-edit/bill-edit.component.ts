import {Component, OnInit, Output, OnChanges} from '@angular/core';
import {Subscription} from "rxjs";
import {FormGroup, FormBuilder, Validators, FormArray, FormControl} from "@angular/forms";
import {Bill} from "../bill";
import {BillService} from "../bill.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Client} from "../../clients/client";
import {Product} from "../../products/product";
import {ProductService} from "../../products/product.service";
import {ClientService} from "../../clients/client.service";
import {EventEmitter} from "@angular/forms/src/facade/async";
import {BillArticle} from "../bill-article";
import {falseIfMissing} from "protractor/built/util";

@Component({
  selector: 'app-bill-edit',
  templateUrl: './bill-edit.component.html'
})
export class BillEditComponent implements OnChanges {


  private subscription: Subscription;
  private billId: number;
  private bill: Bill;
  private billOrg: Bill;
  private isNew: boolean = true;
  private billForm: FormGroup;
  private billEditModeLabel: string;
  private newProduct : Product;

  private totalPrice: number;

  private clientsList: Client [];
  private productsList: Product[];

  constructor(private route: ActivatedRoute,
              private billService: BillService,
              private productService: ProductService,
              private clientService: ClientService,
              private formBuilder: FormBuilder,
              private router: Router) {
  }

  ngOnInit() {

    this.clientsList = this.clientService.getClients();
    this.productsList = this.productService.getProducts();

    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id')) {
          this.isNew = false;
          this.billEditModeLabel = 'Edition facture';
          this.billId = +params['id'];
          this.bill = this.billService.getBill(this.billId);
        } else {
          this.isNew = true;
          this.billEditModeLabel = 'Création facture';
          this.bill = null;
        }
        this.initForm();
        console.log(this.billForm);
        console.log(this.bill);

        this.totalPrice = this.billService.getTotalPrice(this.bill);
        this.billOrg = this.bill
      }
    )
  }

  private initForm() {
    let billClient: Client = null;
    let billProducts: FormArray = new FormArray([]);
    let billDate: string;
    let billState: boolean = false;

    if (!this.isNew) {
      billClient = this.bill.client;
      billDate = this.bill.date;
      billState = this.bill.state;

      if (this.bill.hasOwnProperty('products')) {
        for (let i = 0; i < this.bill.products.length; i++) {
          billProducts.push(
            new FormGroup(
              {
                product: new FormControl(this.bill.products[i].billProduct, [Validators.required]),
                quantity: new FormControl(this.bill.products[i].billProductQuantity, [Validators.required])
              }
            )
          )
        }
      }
    }

    //TODO: Générer new ref

    this.billForm = this.formBuilder.group(
      {
        client: [billClient, Validators.required],
        date: [billDate, Validators.required],
        state: [billState],
        products: billProducts
      }
    )
  }

  onChange(){
    console.log(this.billForm.value);
  }

  onSubmit() {
    if (this.isNew) {
      // Add mode
      this.billService.addBill(this.billForm.value);

    } else {
      // Edit mode
      this.billService.editBill(this.billForm.value, this.billOrg);
    }
  }

  selectNewProduct(item: any){
    console.log(item)
  }

  getArticlePrice(i : number) {
    return this.bill.products[i].billProduct.priceExTax*this.bill.products[i].billProductQuantity
  }

  onAddItem(productId: number, quantity: number) {

    let article = new BillArticle(
      this.productService.getProduct(productId),
      quantity
    );

    (<FormArray>this.billForm.controls['products']).push(
      new FormGroup({
        product: new FormControl(article.billProduct, Validators.required),
        quantity: new FormControl(article.billProductQuantity, Validators.required)
      })
    );
    console.log(article.billProduct.designation + " ajouté a la liste");
    // TODO: Revoir la méthode d'ajout d'un article a la facture
    this.bill.products.push(article)
  }

  updatePrice(event: any){

  }

  isObjectEquals(a, b) {
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    if (aProps.length != bProps.length) {
      return false;
    }

    for (var i = 0; i < aProps.length; i++) {
      var propName = aProps[i];

      if (a[propName] !== b[propName]) {
        return false;
      }
    }

    return true;
  }
}

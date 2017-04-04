import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs";
import {Product} from "../product";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {ProductService} from "../product.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  private subscription: Subscription;
  private productId: number;
  private product: Product;
  private isNew: boolean = true;
  private productForm: FormGroup;
  private productEditModeLabel: string;


  constructor(private route: ActivatedRoute,
              private productService: ProductService,
              private formBuilder: FormBuilder,
              private router: Router) {
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id')) {
          this.isNew = false;
          this.productEditModeLabel = "Edition produit";
          this.productId = +params['id'];
          this.product = this.productService.getProduct(this.productId);
        } else {
          this.isNew = true;
          this.productEditModeLabel = "Ajout produit";
          this.product = null;
        }
        this.initForm();
      }
    )
  }

  private initForm() {
    let productDesignation = '';
    let productType = '';
    let productPriceExTax = 0;
    let productDescription = '';
    let productImageUrl = '';

    if (!this.isNew) {
      productDesignation = this.product.designation;
      productType = this.product.productType;
      productPriceExTax = this.product.priceExTax;
      productDescription = this.product.description;
      productImageUrl = this.product.imageUrl;
    }

    this.productForm = this.formBuilder.group(
      {
        designation: [productDesignation, Validators.required],
        productType: [productType, Validators.required],
        priceExTax: [productPriceExTax, Validators.required],
        description: [productDescription],
        imageUrl: [productImageUrl]
      }
    )

  }

  onSubmit() {
    if (this.isNew) {
      // Add mode
      this.productService.addProduct(this.productForm.value);
      this.clearForm();
    } else {
      // Edit mode
      this.productService.editProduct(this.productForm.value, this.product);
    }
  }

  clearForm() {
    this.productForm.reset();
  }

  onCancel() {
    this.router.navigate(['products']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}

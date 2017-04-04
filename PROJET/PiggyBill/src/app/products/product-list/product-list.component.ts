import {Component, OnInit} from '@angular/core';
import {Product} from "../product";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-product-list',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <a class="btn btn-info" [routerLink]="['new']"><i class="fa fa-plus" aria-hidden="true"></i> Ajouter un produit</a>
        </div>
      </div>
      <hr>
      <div class="row">
          <app-product-item class="col-md-6 col-lg-4" *ngFor="let product of products; let i = index" [product]="product" [productId]="i"></app-product-item>
      </div>
    </div>
  `
})
export class ProductListComponent implements OnInit {

  private products: Product[] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

}

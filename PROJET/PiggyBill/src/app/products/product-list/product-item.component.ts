import {Component, OnInit, Input} from '@angular/core';
import {ProductService} from "../product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-item',
  template: `
    <div class="card">
      <img *ngIf="product.imageUrl" class="card-img-top" src="{{product.imageUrl}}" alt="Card image cap" style="width: 100% ; margin:10px auto" >
      <img *ngIf="!product.imageUrl" class="card-img-top" src="https://aimant-a-opportunites.learnybox.com/medias/aimant-a-opportunites/JDA%202017/Minis/%EF%BC%9F.png" alt="Card image cap" style="width: 80%; margin:10px auto">
      <div class="card-block">
        <h4 class="card-title">{{product.designation}}</h4>
        <p class="card-text">Type : {{product.productType}}</p>
        <p class="card-text">Prix HT : {{product.priceExTax}}€</p>
          <button type="button" class="btn btn-primary" (click)="onEdit()"><i class="fa fa-edit" aria-hidden="true"></i></button>
          <button type="button" class="btn btn-danger" (click)="onDelete()"><i class="fa fa-trash" aria-hidden="true"></i></button>
      </div>
    </div>
  `,
  styles: [`
    .card{ margin-bottom: 10px;}
`]
})
export class ProductItemComponent implements OnInit {

  @Input() product;
  @Input() productId;

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
  }

  onEdit(){
    this.router.navigate(['/products', this.productId, 'edit']);
  }

  onDelete(){
    this.productService.deleteProduct(this.product);
  }
}

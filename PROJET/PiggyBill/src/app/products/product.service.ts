import { Injectable } from '@angular/core';
import {Product} from "./product";

@Injectable()
export class ProductService {

  private products: Product[] = [
    new Product('Produit1', 'Produit', 25),
    new Product('Produit2', 'Produit', 10),
    new Product('Produit3', 'Produit', 30),
    new Product('Produit4', 'Service', 30, '', "https://www.rcteam.fr/12638-thickbox_default/tamiya-camion-scania-r620-highline-56323.jpg"),
  ];

  constructor() { }

  getProducts(){
    return this.products;
  }

  getProduct(productId: number){
    return this.products[productId];
  }

  editProduct(newProduct: Product,oldProduct: Product){
    this.products[this.products.indexOf(oldProduct)] = newProduct;
  }

  deleteProduct(product: any) {
    this.products.splice(this.products.indexOf(product), 1)
  }

  addProduct(product: Product) {
    this.products.push(product)
  }
}

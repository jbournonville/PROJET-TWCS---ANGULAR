import {Injectable} from '@angular/core';
import {Bill} from "./bill";
import {Client} from "../clients/client";
import {Product} from "../products/product";
import {BillArticle} from "./bill-article";

@Injectable()
export class BillService {

  private bills: Bill[] = [
    new Bill(
      'F1700001',
      new Client('Client1','Nom1', 'client1.nom1@test.fr'),
      [
        new BillArticle(
          new Product('Produit1', 'Produit', 25),
          2
        ),
        new BillArticle(
          new Product('Produit3', 'Produit', 30),
          5
        ),
      ],
      '01/01/2017',
      false
    ),
    new Bill(
      'F1700002',
      new Client('Client3', 'Nom3', 'client3.nom3@test.fr', 'Société1'),
      [
        new BillArticle(
          new Product('Produit1', 'Produit', 25),
          2
        ),
        new BillArticle(
          new Product('Produit2', 'Produit', 10),
          10
        ),
      ],
      '01/01/2017',
      false
    )
  ];

  constructor() {
  }

  getBills() {
    // console.log(this.bills);
    return this.bills
  }

  getBill(billId: number) {
    return this.bills[billId];
  }

  getTotalPrice(bill: Bill) {
    let total: number = 0;

    for (let p of bill.products){
      total += (p.billProduct.priceExTax*p.billProductQuantity);
    }

    return total;
  }

  addBill(bill: Bill) {
    this.bills.push(bill);
  }

  deleteBill(bill: Bill) {
    this.bills.splice(this.bills.indexOf(bill), 1)
  }

  editBill(newBill: Bill, oldBill: Bill) {
    this.bills[this.bills.indexOf(oldBill)] = newBill
  }

}

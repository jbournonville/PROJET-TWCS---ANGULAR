import {Component, OnInit, Input} from '@angular/core';
import {Bill} from "../bill";
import {BillService} from "../bill.service";
import {Router} from "@angular/router";

@Component({
  selector: '[bill-item]',
  template: `
    <td>{{bill.reference}}</td>
    <td>{{bill.client.lastName}} {{bill.client.firstName}}</td>
    <td>{{bill.client.company}}</td>
    <td>{{totalPrice}}€</td>
    <td>{{bill.date}}</td>
    <td>{{bill.state}}</td>
    <td>
      <button type="button" class="btn btn-primary btn-sm" (click)="onEdit()"><i class="fa fa-pencil" aria-hidden="true"></i></button>
      <button type="button" class="btn btn-warning btn-sm" (click)="onDelete()"><i class="fa fa-trash" aria-hidden="true"></i></button>
    </td>
  `
})
export class BillItemComponent implements OnInit {

  @Input() bill: Bill;
  @Input() billId: number;

  private totalPrice: number;

  constructor(private billService: BillService, private router: Router) {
  }

  ngOnInit() {
    this.totalPrice = this.billService.getTotalPrice(this.bill)
  }


  onEdit(){
    this.router.navigate(['/bills', this.billId, 'edit'])
  }

}

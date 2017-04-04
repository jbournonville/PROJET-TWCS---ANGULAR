import { Component, OnInit } from '@angular/core';
import {Bill} from "../bill";
import {BillService} from "../bill.service";

@Component({
  selector: 'app-bill-list',
  template: `
    <h3>Factures</h3>
    <table class="table table-hover">
      <thead>
      <tr>
        <th>Facture</th>
        <th>Client</th>
        <th>Société</th>
        <th>Montant HT</th>
        <th>Date</th>
        <th>Payée</th>
        <th><button type="button" class="btn btn-info btn-sm" [routerLink]="['new']">Ajouter <i class="fa fa-plus" aria-hidden="true"></i></button></th>
      </tr>
      </thead>
      <tbody>
        <tr *ngFor="let bill of bills; let i = index" bill-item  [bill]="bill" [billId]="i"></tr>
      </tbody>
    </table>
`
})
export class BillListComponent implements OnInit {

  bills: Bill[] = [];

  constructor(private billService : BillService) { }

  ngOnInit() {
    this.bills = this.billService.getBills();
    console.log(this.bills)
  }

}

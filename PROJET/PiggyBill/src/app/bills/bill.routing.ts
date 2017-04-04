import {Routes} from "@angular/router";
import {BillListComponent} from "./bill-list/bill-list.component";
import {BillEditComponent} from "./bill-edit/bill-edit.component";
import {BillDetailComponent} from "./bill-detail/bill-detail.component";

export const BILL_ROUTES : Routes = [
  {path: '', component: BillListComponent, pathMatch: 'full'},
  {path: 'new', component: BillEditComponent},
  {path: ':id', component: BillDetailComponent},
  {path: ':id/edit', component: BillEditComponent}
];

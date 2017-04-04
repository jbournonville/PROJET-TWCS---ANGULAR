import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import {AngularFireModule} from "angularfire2";

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { SidebarComponent } from './ui/sidebar/sidebar.component';
import { ProductsComponent } from './products/products.component';
import { SigninComponent } from './auth/signin.component';
import { SignupComponent } from './auth/signup.component';
import {AuthService} from "./auth/auth.service";
import {AuthGuard} from "./auth/auth.guard";
import { ClientsComponent } from './clients/clients.component';
import { QuotesComponent } from './quotes/quotes.component';
import { BillsComponent } from './bills/bills.component';
import { ClientListComponent } from './clients/client-list/client-list.component';
import {routing} from "./app.routing";
import { ClientItemComponent } from './clients/client-list/client-item.component';
import { ClientEditComponent } from './clients/client-edit/client-edit.component';
import {ClientService} from "./clients/client.service";
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductItemComponent } from './products/product-list/product-item.component';
import {ProductService} from "./products/product.service";
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { BillListComponent } from './bills/bill-list/bill-list.component';
import { BillEditComponent } from './bills/bill-edit/bill-edit.component';
import { BillDetailComponent } from './bills/bill-detail/bill-detail.component';
import { BillItemComponent } from './bills/bill-list/bill-item.component';
import {BillService} from "./bills/bill.service";
import { DemoComponent } from './demo/demo.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    SidebarComponent,
    ProductsComponent,
    SigninComponent,
    SignupComponent,
    SigninComponent,
    ClientsComponent,
    QuotesComponent,
    BillsComponent,
    ClientListComponent,
    ClientItemComponent,
    ClientEditComponent,
    ProductListComponent,
    ProductItemComponent,
    ProductEditComponent,
    BillListComponent,
    BillEditComponent,
    BillDetailComponent,
    BillItemComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [
    AuthService,
    AuthGuard,
    ClientService,
    ProductService,
    BillService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

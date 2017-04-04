import {Routes, RouterModule} from "@angular/router";
import {ClientsComponent} from "./clients/clients.component";
import {ProductsComponent} from "./products/products.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {BillsComponent} from "./bills/bills.component";
import {QuotesComponent} from "./quotes/quotes.component";
import {SigninComponent} from "./auth/signin.component";
import {SignupComponent} from "./auth/signup.component";
import {AuthGuard} from "./auth/auth.guard";
import {CLIENT_ROUTES} from "./clients/client.routing";
import {PRODUCT_ROUTES} from "./products/product.routing";
import {BILL_ROUTES} from "./bills/bill.routing";
import {DemoComponent} from "./demo/demo.component";

const APP_ROUTES: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'products', component: ProductsComponent, children: PRODUCT_ROUTES , canActivate:[AuthGuard]},
  {path: 'clients', component: ClientsComponent,  children: CLIENT_ROUTES},
  {path: 'bills', component: BillsComponent,  children: BILL_ROUTES},
  {path: 'quotes', component: QuotesComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'demo', component: DemoComponent},
];

export const routing = RouterModule.forRoot(APP_ROUTES);

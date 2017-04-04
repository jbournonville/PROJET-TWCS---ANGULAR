import {Routes} from "@angular/router";
import {ProductEditComponent} from "./product-edit/product-edit.component";

export const PRODUCT_ROUTES : Routes = [
  {path: 'new', component: ProductEditComponent },
  {path: ':id/edit', component: ProductEditComponent}
];

import {Routes} from "@angular/router";
import {ClientEditComponent} from "./client-edit/client-edit.component";

export const CLIENT_ROUTES : Routes = [
  {path: 'new', component: ClientEditComponent},
  {path: ':id/edit', component: ClientEditComponent}
];

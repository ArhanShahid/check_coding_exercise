import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckoutComponent } from './checkout/checkout.component';
import { ApplicationFormComponent } from './application-form/application-form.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'checkout',
    pathMatch: 'full',
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'application',
    component: ApplicationFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],

})
export class AppRoutingModule { }

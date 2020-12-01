import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent } from '../../components/basket/checkout/checkout.component';
import { BasketContentResolver } from '../../services/basket-content-resolver';


const routes: Routes = [

  {
    path: '', component: CheckoutComponent,
    resolve: {
      basketItems: BasketContentResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }

import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CheckoutComponent } from '../../components/basket/checkout/checkout.component';
import { FrameModule } from '../frame/frame.module';

import { CheckoutRoutingModule } from './checkout-routing.module';


@NgModule({
    declarations: [
        CheckoutComponent],
    imports: [
        FrameModule,
        RouterModule,
        CheckoutRoutingModule,
        ReactiveFormsModule,
    ],
})
export class CheckoutModule {
}

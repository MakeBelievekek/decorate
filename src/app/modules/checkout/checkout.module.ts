import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CheckoutModalComponent } from '../../components/basket/checkout/checkout-modal/checkout-modal.component';
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

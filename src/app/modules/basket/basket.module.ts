import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BasketContentComponent } from '../../components/basket/basket-content/basket-content.component';
import { BasketHeaderComponent } from '../../components/basket/basket-header/basket-header.component';
import { BasketItemComponent } from '../../components/basket/basket-item/basket-item.component';
import { PlusMinusInputComponent } from '../../components/basket/basket-item/plus-minus-input/plus-minus-input.component';
import { BasketComponent } from '../../components/basket/basket.component';
import { EmptyBasketComponent } from '../../components/basket/empty-basket/empty-basket.component';
import { FrameModule } from '../frame/frame.module';
import { PlusMinusModule } from '../plus-minus/plus-minus.module';

import { BasketRoutingModule } from './basket-routing.module';


@NgModule({
    declarations: [
        BasketComponent,
        BasketHeaderComponent,
        BasketContentComponent,
        BasketItemComponent,
        EmptyBasketComponent,
    ],
    imports: [
        PlusMinusModule,
        RouterModule,
        FrameModule,
        BasketRoutingModule,
    ],
})
export class BasketModule {
}

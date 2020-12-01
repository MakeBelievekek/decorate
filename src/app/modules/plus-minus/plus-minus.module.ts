import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PlusMinusInputComponent } from '../../components/basket/basket-item/plus-minus-input/plus-minus-input.component';


@NgModule({
    declarations: [
        PlusMinusInputComponent,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        PlusMinusInputComponent,
    ],
})
export class PlusMinusModule {
}

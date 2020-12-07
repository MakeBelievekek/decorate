import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DecorateModalComponent } from '../../components/shared/decorate-modal/decorate-modal.component';


@NgModule({
    declarations: [DecorateModalComponent],
    imports: [
        CommonModule,
    ],
    exports: [DecorateModalComponent],
})
export class DecorateModalModule {
}

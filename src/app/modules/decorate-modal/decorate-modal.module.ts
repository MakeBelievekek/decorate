import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {DecorateModalComponent} from '../../components/shared/decorate-modal/decorate-modal.component';
import {ModalDirective} from '../../components/shared/decorate-modal/modal.directive';


@NgModule({
  declarations: [DecorateModalComponent, ModalDirective],
  imports: [
    CommonModule,

  ],
  exports: [DecorateModalComponent],
})
export class DecorateModalModule {
}

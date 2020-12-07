import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ProductDetailsNewComponent} from '../../components/product/product-details-new/product-details-new.component';
import {SimilarItemComponent} from '../../components/product/product-details-new/similar-item/similar-item.component';
import {ProductDetailsComponent} from '../../components/product/product-details/product-details.component';
import {ProductImageCardComponent} from '../../components/product/product-image-card/product-image-card.component';
import {ProductComponent} from '../../components/product/product.component';
import {CardShadowDirective} from '../../directives/card-shadow.directive';
import {CssAnimationStateDirective} from '../../directives/css-animation-state.directive';
import {DecorateModalModule} from '../decorate-modal/decorate-modal.module';
import {FrameModule} from '../frame/frame.module';
import {PlusMinusModule} from '../plus-minus/plus-minus.module';
import {ProductRoutingModule} from './product-routing.module';
import {CurrencyPipe} from '../../pipes/currency.pipe';


@NgModule({
  declarations: [
    ProductDetailsComponent,
    ProductComponent,
    ProductImageCardComponent,
    ProductDetailsNewComponent,
    SimilarItemComponent,
    CardShadowDirective,
    CssAnimationStateDirective,
    CurrencyPipe
  ],
  imports: [
    RouterModule,
    FrameModule,
    ProductRoutingModule,
    PlusMinusModule,
    DecorateModalModule
  ],
})
export class ProductModule {
}

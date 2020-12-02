import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgcCookieConsentConfig, NgcCookieConsentModule } from 'ngx-cookieconsent';
import { NgxLoadingModule } from 'ngx-loading';
import { ToastrModule } from 'ngx-toastr';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { AccordionModule } from 'primeng/accordion';
import { ConfirmationService, MessageService } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CarouselModule } from 'primeng/carousel';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailsNewComponent } from './components/product/product-details-new/product-details-new.component';
import { ProductDetailsComponent } from './components/product/product-details/product-details.component';
import { ProductImageCardComponent } from './components/product/product-image-card/product-image-card.component';
import { ProductImagesComponent } from './components/product/product-images/product-images.component';
import { SmallIgmagesComponent } from './components/product/product-images/small-igmages/small-igmages.component';
import { ProductModalComponent } from './components/product/product-modal/product-modal.component';
import { ProductComponent } from './components/product/product.component';
import { ActiveFiltersComponent } from './components/products/active-filters/active-filters.component';
import { ProductsFilterComponent } from './components/products/products-filter/products-filter.component';
import { ProductsHeaderComponent } from './components/products/products-header/products-header.component';
import { ProductListItemComponent } from './components/products/products-list/product-list-item/product-list-item.component';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { ProductsModalComponent } from './components/products/products-modal/products-modal.component';
import { ProductsComponent } from './components/products/products.component';
import { DecorateCarouselComponent } from './components/shared/decorate-carousel/decorate-carousel.component';
import { DecorateModalComponent } from './components/shared/decorate-modal/decorate-modal.component';
import { NavigationHeaderComponent } from './components/shared/navigation-header/navigation-header.component';
import { CardShadowDirective } from './directives/card-shadow.directive';
import { CssAnimationStateDirective } from './directives/css-animation-state.directive';
import { ReloadOnNgForNewElementDirective } from './directives/reload-on-ng-for-new-element.directive';
import { FrameModule } from './modules/frame/frame.module';
import { PlusMinusModule } from './modules/plus-minus/plus-minus.module';
import { NameShortenerPipe } from './pipes/name-shortener.pipe';
import { LocalStorageService } from './services/localStorage.service';
import { BarionInformationComponent } from './components/barion-information/barion-information.component';
import { ModalDirective } from './components/shared/decorate-modal/modal.directive';
import {DecorateMakeCarouselComponent} from './components/shared/decorate-make-carousel/decorate-make-carousel.component';

const cookieConfig: NgcCookieConsentConfig = {
    'cookie': {
        'domain': 'http://localhost:4200',
    },
    'position': 'bottom-right',
    'theme': 'classic',
    'palette': {
        'popup': {
            'background': '#000000',
            'text': '#ffffff',
            'link': '#ffffff',
        },
        'button': {
            'background': '#f1d600',
            'text': '#000000',
            'border': 'transparent',
        },
    },
    'type': 'info',
    'content': {
        'message': 'This website uses cookies to ensure you get the best experience on our website.',
        'dismiss': 'Got it!',
        'deny': 'Refuse cookies',
        'link': 'Learn more',
        'href': 'https://cookiesandyou.com',
        'policy': 'Cookie Policy',
    },
};


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductsListComponent,
    ProductDetailsComponent,
    SmallIgmagesComponent,
    ProductsHeaderComponent,
    ProductsModalComponent,
    ProductsFilterComponent,
    ProductComponent,
    ProductListItemComponent,
    ActiveFiltersComponent,
    CardShadowDirective,
    ReloadOnNgForNewElementDirective,
    NameShortenerPipe,
    ProductImagesComponent,
    NavigationHeaderComponent,
    ProductImageCardComponent,
    ProductDetailsNewComponent,
    DecorateCarouselComponent,
    ProductModalComponent,
    DecorateModalComponent,
    CssAnimationStateDirective,
    ModalDirective,
    DecorateMakeCarouselComponent,
      BarionInformationComponent,],



    imports: [
        AccordionModule,
        NgcCookieConsentModule.forRoot(cookieConfig),
        RouterModule,
        AppRoutingModule,
        HttpClientModule,
        FontAwesomeModule,
        BrowserAnimationsModule,
        StorageServiceModule,
        ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
        ToastrModule.forRoot({
            timeOut: 10000,
        }),
        NgbTooltipModule,
        MatTooltipModule,
        BreadcrumbModule,

        NgxLoadingModule.forRoot({}),
        FrameModule,
        PlusMinusModule,

    ],
    providers: [LocalStorageService, ConfirmationService, MessageService],
    bootstrap: [AppComponent],
})
export class AppModule {
}

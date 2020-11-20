import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {ServiceWorkerModule} from '@angular/service-worker';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import {NgcCookieConsentConfig, NgcCookieConsentModule} from 'ngx-cookieconsent';
import {ToastrModule} from 'ngx-toastr';
import {StorageServiceModule} from 'ngx-webstorage-service';
import {AccordionModule} from 'primeng/accordion';
import {ConfirmationService, MessageService} from 'primeng/api';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {CarouselModule} from 'primeng/carousel';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {MessagesModule} from 'primeng/messages';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {RatingModule} from 'primeng/rating';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {TableModule} from 'primeng/table';
import {environment} from '../environments/environment';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AdminContentComponent} from './components/admin/admin-content/admin-content.component';
import {AdminMainComponent} from './components/admin/admin-main/admin-main.component';
import {AdminProductFormComponent} from './components/admin/admin-product-form/admin-product-form.component';
import {AdminSidebarComponent} from './components/admin/admin-sidebar/admin-sidebar.component';
import {AdminComponent} from './components/admin/admin.component';
import {CategoryFormComponent} from './components/admin/category-form/category-form.component';
import {PaymentHistoryComponent} from './components/admin/payment-history/payment-history.component';
import {BasketBottomComponent} from './components/basket/basket-bottom/basket-bottom.component';
import {BasketContentComponent} from './components/basket/basket-content/basket-content.component';
import {BasketHeaderComponent} from './components/basket/basket-header/basket-header.component';
import {BasketItemComponent} from './components/basket/basket-item/basket-item.component';
import {PlusMinusInputComponent} from './components/basket/basket-item/plus-minus-input/plus-minus-input.component';
import {BasketComponent} from './components/basket/basket.component';
import {CheckoutComponent} from './components/basket/checkout/checkout.component';
import {FooterComponent} from './components/footer/footer.component';
import {ContentHeaderComponent} from './components/home/content-header/content-header.component';
import {ContentComponent} from './components/home/content/content.component';
import {FourthContentComponent} from './components/home/fourth-content/fourth-content.component';
import {HomeComponent} from './components/home/home.component';
import {NewsComponent} from './components/home/news/news.component';
import {NewsletterComponent} from './components/home/newsletter/newsletter.component';
import {SalesComponent} from './components/home/sales/sales.component';
import {SecondContentComponent} from './components/home/second-content/second-content.component';
import {ThirdContentComponent} from './components/home/third-content/third-content.component';

import {NavbarModalComponent} from './components/navbar/navbar-modal/navbar-modal.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {ProductDetailsComponent} from './components/product/product-details/product-details.component';
import {ProductImagesComponent} from './components/product/product-images/product-images.component';
import {SmallIgmagesComponent} from './components/product/product-images/small-igmages/small-igmages.component';
import {ProductComponent} from './components/product/product.component';
import {ActiveFiltersComponent} from './components/products/active-filters/active-filters.component';
import {ProductsFilterComponent} from './components/products/products-filter/products-filter.component';
import {ProductsHeaderComponent} from './components/products/products-header/products-header.component';
import {ProductListItemComponent} from './components/products/products-list/product-list-item/product-list-item.component';
import {ProductsListComponent} from './components/products/products-list/products-list.component';
import {ProductsModalComponent} from './components/products/products-modal/products-modal.component';
import {ProductsComponent} from './components/products/products.component';
import {BackgroundImgDirective} from './directives/background-img.directive';
import {CardShadowDirective} from './directives/card-shadow.directive';
import {ReloadOnNgForNewElementDirective} from './directives/reload-on-ng-for-new-element.directive';
import {NameShortenerPipe} from './pipes/name-shortener.pipe';
import {LocalStorageService} from './services/localStorage.service';
import {NavigationHeaderComponent} from './components/shared/navigation-header/navigation-header.component';
import {ProductImageCardComponent} from './components/product/product-image-card/product-image-card.component';
import {ProductDetailsNewComponent} from './components/product/product-details-new/product-details-new.component';
import { DecorateCarouselComponent } from './components/shared/decorate-carousel/decorate-carousel.component';


const cookieConfig: NgcCookieConsentConfig = {
  cookie: {
    domain: 'localhost'
  },
  position: 'bottom-right',
  theme: 'classic',
  palette: {
    popup: {
      background: '#000000',
      text: '#ffffff',
      link: '#ffffff'
    },
    button: {
      background: '#f1d600',
      text: '#000000',
      border: 'transparent'
    }
  },
  type: 'info',
  content: {
    message: 'This website uses cookies to ensure you get the best experience on our website.',
    dismiss: 'Got it!',
    deny: 'Refuse cookies',
    link: 'Learn more',
    href: 'https://cookiesandyou.com',
    policy: 'Cookie Policy'
  }
};

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    ContentHeaderComponent,
    NewsletterComponent,
    SecondContentComponent,
    AdminComponent,
    ProductsComponent,
    AdminContentComponent,
    AdminMainComponent,
    AdminSidebarComponent,
    AdminProductFormComponent,
    CategoryFormComponent,
    ProductsListComponent,
    PaymentHistoryComponent,
    ProductDetailsComponent,
    SmallIgmagesComponent,
    ProductsHeaderComponent,
    ThirdContentComponent,
    FourthContentComponent,
    NewsComponent,
    SalesComponent,
    ProductsModalComponent,
    NavbarModalComponent,
    BasketComponent,
    BasketHeaderComponent,
    BasketContentComponent,
    BasketBottomComponent,
    BasketItemComponent,
    ProductsFilterComponent,
    PlusMinusInputComponent,
    CheckoutComponent,
    ProductComponent,
    ProductListItemComponent,
    ActiveFiltersComponent,
    CardShadowDirective,
    BackgroundImgDirective,
    ReloadOnNgForNewElementDirective,
    NameShortenerPipe,
    ProductImagesComponent,
    NavigationHeaderComponent,
    ProductImageCardComponent,
    ProductDetailsNewComponent,
    DecorateCarouselComponent,
  ],

  imports: [
    AccordionModule,
    NgcCookieConsentModule.forRoot(cookieConfig),
    MatBadgeModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    StorageServiceModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    MatIconModule,
    MatTooltipModule,
    ToastrModule.forRoot({
      timeOut: 10000,

    }),
    NgbTooltipModule,
    BreadcrumbModule,
    ConfirmDialogModule,
    ConfirmPopupModule,
    MessagesModule,
    RatingModule,
    TableModule,
    OverlayPanelModule,
    ScrollPanelModule,
    CarouselModule,
  ],
  providers: [LocalStorageService, ConfirmationService, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {
}

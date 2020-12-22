import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {ServiceWorkerModule} from '@angular/service-worker';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import {NgcCookieConsentConfig, NgcCookieConsentModule} from 'ngx-cookieconsent';
import {NgxLoadingModule} from 'ngx-loading';
import {ToastrModule} from 'ngx-toastr';
import {StorageServiceModule} from 'ngx-webstorage-service';
import {AccordionModule} from 'primeng/accordion';
import {ConfirmationService, MessageService} from 'primeng/api';
import {environment} from '../environments/environment';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BarionInformationComponent} from './components/barion-information/barion-information.component';
import {DecorateMakeCarouselComponent} from './components/shared/decorate-make-carousel/decorate-make-carousel.component';
import {FrameModule} from './modules/frame/frame.module';
import {LocalStorageService} from './services/localStorage.service';

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
        DecorateMakeCarouselComponent,
        BarionInformationComponent,
    ],

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
        NgxLoadingModule.forRoot({}),
        FrameModule,
    ],
    providers: [LocalStorageService, ConfirmationService, MessageService],
    bootstrap: [AppComponent],
  exports: [
  ],
})
export class AppModule {
}

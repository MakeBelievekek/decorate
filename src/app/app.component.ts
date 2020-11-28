import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { NgcCookieConsentService, NgcInitializeEvent, NgcStatusChangeEvent } from 'ngx-cookieconsent';
import { Observable, Subscription } from 'rxjs';
import { ModalControllerModel } from './models/modalController.model';
import { ScreenControlModel } from './models/screenControl.model';
import { LoadingService } from './services/loading.service';
import { LocalStorageService } from './services/localStorage.service';
import { ModalService } from './services/modal.service';
import { ScreenService } from './services/screen.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
    title = 'decorate';
    modalControl: ModalControllerModel;
    screenControl: ScreenControlModel;
    bodyPressed: boolean;
    private popupOpenSubscription: Subscription;
    private popupCloseSubscription: Subscription;
    private initializeSubscription: Subscription;
    private statusChangeSubscription: Subscription;
    private revokeChoiceSubscription: Subscription;
    private noCookieLawSubscription: Subscription;
    isSpinnerVisible$: Observable<boolean> = this.loadingService.isNavigationPending$;


    constructor(private modalService: ModalService, private screenService: ScreenService
        , private localStorageService: LocalStorageService, private ccService: NgcCookieConsentService
        , private loadingService: LoadingService) {
    }

    ngOnDestroy(): void {
        this.deleteCookieFromLocal();
        this.popupOpenSubscription.unsubscribe();
        this.popupCloseSubscription.unsubscribe();
        this.initializeSubscription.unsubscribe();
        this.statusChangeSubscription.unsubscribe();
    }


    ngOnInit(): void {
        console.log(this.isSpinnerVisible$);
        this.modalControl = this.modalService.modalControl;
        this.screenControl = this.screenService.screenControl;
        this.changeContentOnResize();
        this.localStorageService.saveCookiePolicy('cookiePolicy', true);
        this.popupOpenSubscription = this.ccService.popupOpen$.subscribe(
            () => {});
        this.popupCloseSubscription = this.ccService.popupClose$.subscribe(
            () => {},
        );
        this.initializeSubscription = this.ccService.initialize$.subscribe(
            (event: NgcInitializeEvent) => {
            });
        this.statusChangeSubscription = this.ccService.statusChange$.subscribe(
            (event: NgcStatusChangeEvent) => {
            });
    }


    @HostListener('window:beforeunload')
    deleteCookieFromLocal() {
        this.localStorageService.deleteItem('cookiePolicy');
    }

    @HostListener('window:resize', ['$event'])
    changeContentOnResize() {
        this.modalService.closeModal();
        this.screenService.getScreenSize();
        this.screenService.screenControlHandler();
        this.screenService.smallDropDownHandler();
    }

    closeModal() {
        if (this.modalControl.keepShowingModal && this.bodyPressed) {
            this.modalService.setModalButtonPressedFalse();
            this.bodyPressed = false;
        } else {
            this.modalService.closeModal();
        }
    }

    bodyClick() {
        this.bodyPressed = true;
        this.closeModal();
    }
}

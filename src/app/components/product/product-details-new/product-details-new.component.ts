import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { DummyProductModel } from '../../../models/dummyProductModel';
import { LocalProductModel } from '../../../models/localProductModel';
import { ScreenSizeModel } from '../../../models/ScreenSize.model';
import { LocalStorageService } from '../../../services/localStorage.service';


@Component({
    selector: 'app-product-details-new',
    templateUrl: './product-details-new.component.html',
    styleUrls: ['./product-details-new.component.css'],
})
export class ProductDetailsNewComponent implements OnInit {
    @Input() productDetailsDimension: ScreenSizeModel;
    @Input() dummyProduct: DummyProductModel;
    @ViewChild('productDetailContainer') productDetailContainer: ElementRef;
    isModalOpen: boolean;
    modalState = 'open';
    similarProducts = [new DummyProductModel(), new DummyProductModel()];
    item: LocalProductModel = new class implements LocalProductModel {
        id: number = 2;
        productType: string = 'WALLPAPER';
        qty: number = 1;
    };
    localQty: number = 1;

    constructor(private localStorageService: LocalStorageService) {
    }

    ngOnInit(): void {
        this.dummyProduct = new DummyProductModel();
    }

    addToLocal(localKey: string) {
        this.localStorageService.storeOnLocalStorage(this.item, localKey);
    }

    openModal() {
        this.modalState = 'open';
        this.isModalOpen = true;
        this.disableScroll();
    }

    private disableScroll() {
        const x = window.scrollX;
        const y = window.scrollY;
        window.onscroll = () => {
            window.scrollTo(x, y);
        };
    }

    private enableScroll() {
        window.onscroll = () => {
        };
    }

    startModalClose() {
        this.modalState = 'closed';
        this.enableScroll();
    }


    closeModal() {
        this.isModalOpen = false;
    }


}

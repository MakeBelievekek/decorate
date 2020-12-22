import { Component, HostListener, OnInit } from '@angular/core';
import { ModalControllerModel } from '../../models/modalController.model';
import { ProductCategoryModalModel } from '../../models/ProductCategoryModalModel';
import { ScreenControlModel } from '../../models/screenControl.model';
import { ScreenSizeModel } from '../../models/ScreenSize.model';
import { LocalStorageService } from '../../services/localStorage.service';
import { ModalService } from '../../services/modal.service';
import { ProductService } from '../../services/product.service';
import { ScreenService } from '../../services/screen.service';


const CART_KEY = 'local_cartList';
const WISH_LIST = 'local_wishList';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
    showSideSlide: boolean;
    animationState = null;
    screenControl: ScreenControlModel;
    numberOfItemsInBasket: number = 0;
    numberOfItemInWish: number = 0;
    screenSize: ScreenSizeModel = new class implements ScreenSizeModel {
        height: number;
        width: number;
    };
    modalControl: ModalControllerModel;
    productSelectorDropDownState = 'close';
    isProductSelectorDropdownOpen: boolean;
    products: ProductCategoryModalModel[] = [];
    isShow: boolean = false;

    constructor(private modalService: ModalService,
                private screenService: ScreenService,
                private localStorageService: LocalStorageService,
                private productService: ProductService) {
    }

    ngOnInit(): void {

        this.getAttributes();
        this.screenControl = this.screenService.screenControl;
        if (this.localStorageService.getItemsFromLocalStorage(CART_KEY)) {
            this.numberOfItemsInBasket = this.localStorageService.getItemsFromLocalStorage(CART_KEY).length;
        }
        if (this.localStorageService.getItemsFromLocalStorage(WISH_LIST)) {
            this.numberOfItemInWish = this.localStorageService.getItemsFromLocalStorage(WISH_LIST).length;
        }
        this.modalControl = this.modalService.modalControl;

    }

    getAttributes() {
        this.productService.getAttributesForDropdown().subscribe((data) => {
            this.products = data;
            console.log(this.products);
        });
    }


    toggleNavigationModal() {
        this.modalService.toggleModal('navigation');
    }

    toggleProductsModal() {
        this.productSelectorDropDownState === 'open' ? this.productSelectorDropDownState = 'close' : this.productSelectorDropDownState = 'open';
        this.isProductSelectorDropdownOpen = true;
        /*this.modalService.toggleModal('products');*/
    }

    closeProductModal(): void {
        this.isProductSelectorDropdownOpen = false;
        this.productSelectorDropDownState = 'close';
    }

    toggleBasketModal() {
        this.modalService.toggleModal('basket');
    }

    @HostListener('window:resize', ['$event'])
    changeContentOnResize() {
        this.screenSize = this.screenService.getScreenSize();
        this.closeSideSlideOnResize();
    }

    private closeSideSlideOnResize() {
        if (this.animationState === 'open') {
            this.animationState = 'close';
            this.enableScroll();
        }
    }

    toggleSideSlide(): void {
        this.showSideSlide = true;
        this.animationState === 'open' ? this.animationState = 'close' : this.animationState = 'open';
        this.disableScroll();
    }

    closeSlide(): void {
        this.showSideSlide = false;
        this.enableScroll();
    }

    disableScroll() {
        const x = window.scrollX;
        const y = window.scrollY;
        window.onscroll = () => {
            window.scrollTo(x, y);
        };
    }

    enableScroll() {
        window.onscroll = () => {
        };
    }

    openProducts() {
        this.isShow = !this.isShow;
    }
}

import {Component, HostListener, OnInit} from '@angular/core';
import {ModalControllerModel} from '../../models/modalController.model';
import {ScreenControlModel} from '../../models/screenControl.model';
import {ScreenSizeModel} from '../../models/ScreenSize.model';
import {LocalStorageService} from '../../services/localStorage.service';
import {ModalService} from '../../services/modal.service';
import {ScreenService} from '../../services/screen.service';


const CART_KEY = 'local_cartList';

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
  screenSize: ScreenSizeModel = new class implements ScreenSizeModel {
    height: number;
    width: number;
  };
  modalControl: ModalControllerModel;
  modalOpen: boolean = false;

  constructor(private modalService: ModalService, private screenService: ScreenService, private localStorageService: LocalStorageService) {
  }

  ngOnInit(): void {
    this.screenControl = this.screenService.screenControl;
    if (this.localStorageService.getItemsFromLocalStorage(CART_KEY)) {
      this.numberOfItemsInBasket = this.localStorageService.getItemsFromLocalStorage(CART_KEY).length;
    }
    this.modalControl = this.modalService.modalControl;
    console.log(this.animationState);
  }


  toggleNavigationModal() {
    this.modalService.toggleModal('navigation');
  }

  toggleProductsModal() {

    this.modalService.toggleModal('products');
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
}

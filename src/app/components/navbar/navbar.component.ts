import { Component, OnInit } from '@angular/core';
import { ScreenControlModel } from '../../models/screenControl.model';
import { LocalStorageService } from '../../services/localStorage.service';
import { ModalService } from '../../services/modal.service';
import { ScreenService } from '../../services/screen.service';

const CART_KEY = 'local_cartList';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],

})
export class NavbarComponent implements OnInit {
  screenControl: ScreenControlModel;
  numberOfItemsInBasket: number = 0;


  constructor(private modalService: ModalService, private screenService: ScreenService, private localStorageService: LocalStorageService) {
  }

  ngOnInit(): void {
    this.screenControl = this.screenService.screenControl;
    if (this.localStorageService.getItemsFromLocalStorage(CART_KEY)) {
      this.numberOfItemsInBasket = this.localStorageService.getItemsFromLocalStorage(CART_KEY).length;
    }
  }

  toggleNavigationModal() {
    this.modalService.toggleModal('navigation');
  }

  toggleProductsModal() {
    this.modalService.toggleModal('products');
  }

}

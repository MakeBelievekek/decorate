import {Component, HostListener, OnInit} from '@angular/core';
import {animate, keyframes, style, transition, trigger} from "@angular/animations";
import {ModalService} from "../../services/modal.service";
import * as kf from '../../utils/keyframes';
import {ModalControllerModel} from "../../models/modalController.model";
import {ScreenService} from "../../services/screen.service";
import {ScreenSizeModel} from "../../models/ScreenSize.model";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],

})
export class NavbarComponent implements OnInit {
  screenSizeModel: ScreenSizeModel;
  largeNavToShow: boolean;

  constructor(private modalService: ModalService, private screenService: ScreenService) {
  }

  ngOnInit(): void {
    this.changeContentOnResize();
  }

  @HostListener('window:resize', ['$event'])
  changeContentOnResize() {
    this.screenSizeModel = this.screenService.getScreenSize();
    if (this.screenSizeModel.width >= 1000) {
      this.largeNavToShow = true;
      this.modalService.closeModal();
    } else {
      this.largeNavToShow = false;
      this.modalService.closeModal();
    }
  }

  toggleNavigationModal() {
    this.modalService.toggleModal('navigation');
  }

  toggleProductsModal() {
    this.modalService.toggleModal('products');
  }

}

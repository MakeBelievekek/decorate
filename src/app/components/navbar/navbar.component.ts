import {Component, HostListener, OnInit} from '@angular/core';
import {animate, keyframes, style, transition, trigger} from "@angular/animations";
import {ModalService} from "../../services/modal.service";
import * as kf from '../../utils/keyframes';
import {ModalControllerModel} from "../../models/ModalController.model";
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
  showNavigationModal: boolean;

  constructor(private modalService:ModalService, private screenService: ScreenService) {
  }

  ngOnInit(): void {
    this.changeContentOnResize();

    this.modalService.showModalState.subscribe(
      value => this.showNavigationModal = value.show
    );
  }


  @HostListener('window:resize', ['$event'])
  changeContentOnResize() {
    this.screenSizeModel = this.screenService.getScreenSize();
    if (this.screenSizeModel.width >= 1000) {
      this.largeNavToShow = true;
      this.modalService.showModalState.next({control: '', show: false})
    } else {
      this.modalService.showModalState.next({control: '', show: false})
      this.largeNavToShow = false;
    }
  }

  toggleNavigationModal() {
    this.modalService.showModalState.next({control: 'navigation', show: !this.showNavigationModal })
  }

  toggleProductsModal() {
    this.modalService.showModalState.next({control: 'products', show: !this.showNavigationModal })
  }

}

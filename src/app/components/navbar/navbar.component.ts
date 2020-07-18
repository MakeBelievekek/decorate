import {Component, HostListener, OnInit} from '@angular/core';
import {animate, keyframes, style, transition, trigger} from "@angular/animations";
import {ModalService} from "../../services/modal.service";
import * as kf from '../../utils/keyframes';
import {ModalControllerModel} from "../../models/ModalController.model";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],

})
export class NavbarComponent implements OnInit {
  private _screenHeight: number;
  private _screenWidth: number;
  largeNavToShow: boolean;
  showNavigationModal: boolean;

  constructor(private modalService:ModalService) {
  }

  ngOnInit(): void {
    this.getScreenSize();
    this.modalService.showModalState.subscribe(
      value => this.showNavigationModal = value.show
    );
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    if (this.screenWidth >= 1000) {
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

  get screenWidth(): number {
    return this._screenWidth;
  }


  set screenWidth(value: number) {
    this._screenWidth = value;
  }

  get screenHeight(): number {
    return this._screenHeight;
  }

  set screenHeight(value: number) {
    this._screenHeight = value;
  }
}

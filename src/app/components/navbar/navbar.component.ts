import {Component, HostListener, OnInit} from '@angular/core';
import {animate, keyframes, style, transition, trigger} from '@angular/animations';
import {ModalService} from '../../services/modal.service';
import * as kf from '../../utils/keyframes';
import {ModalControllerModel} from '../../models/modalController.model';
import {ScreenService} from '../../services/screen.service';
import {ScreenSizeModel} from '../../models/ScreenSize.model';
import {ScreenControlModel} from '../../models/screenControl.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],

})
export class NavbarComponent implements OnInit {
  screenControl: ScreenControlModel;

  constructor(private modalService: ModalService, private screenService: ScreenService) {
  }

  ngOnInit(): void {
    this.screenControl = this.screenService.screenControl;
  }

  toggleNavigationModal() {
    this.modalService.toggleModal('navigation');
  }

  toggleProductsModal() {
    this.modalService.toggleModal('products');
  }

}

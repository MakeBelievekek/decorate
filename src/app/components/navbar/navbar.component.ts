import {Component, HostListener, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [trigger('fade', [
    transition(
      '* => void', [
        animate('1s linear',
          style({opacity: 0}))
      ]
    )])]
})
export class NavbarComponent implements OnInit {
  private _screenHeight: number;
  private _screenWidth: number;
  largeNavToShow: boolean;
  showNavigationModal: boolean;
  modalController: string;

  constructor(private modalService:ModalService) {
  }

  ngOnInit(): void {
    this.getScreenSize();
    this.modalService.showModalState.subscribe(
      show => this.showNavigationModal = show
    );
    console.log(this.showNavigationModal)
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    if (this.screenWidth >= 1000) {
      this.largeNavToShow = true;
      this.showNavigationModal = false;
      this.modalService.showModal = this.showNavigationModal;
    } else {
      this.largeNavToShow = false;
      this.showNavigationModal = false;
      this.modalService.showModal = this.showNavigationModal;
    }
  }

  toggleNavigationModal() {
    this.showNavigationModal = !this.showNavigationModal;
    this.modalService.showModal = this.showNavigationModal;
    this.modalController = 'navigation';
  }

  toggleProductsModal() {
    this.showNavigationModal = !this.showNavigationModal;
    this.modalService.showModal = this.showNavigationModal;
    this.modalController = 'products';
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

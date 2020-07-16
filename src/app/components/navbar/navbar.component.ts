import {Component, HostListener, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [trigger('fade', [
    transition(
      ':leave', [
        style({opacity: 1}),
        animate(500,
          style({opacity: 0}))
      ]
    )])]
})
export class NavbarComponent implements OnInit {
  screenHeight: number;
  screenWidth: number;
  largeNavToShow: boolean;
  showModal: boolean = false;

  constructor() {

  }

  ngOnInit(): void {
    this.getScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    console.log(this.screenHeight, this.screenWidth);
    if (this.screenWidth >= 1000) {
      this.largeNavToShow = true;
      this.showModal = false;
    } else {
      this.largeNavToShow = false;
    }
  }

  toggleModal() {
    this.showModal = !this.showModal;
    console.log(this.showModal);
  }
}

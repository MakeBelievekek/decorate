import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
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
    } else {
      this.largeNavToShow = false;
    }
  }

  toggleModal() {
    this.showModal = !this.showModal;
    console.log(this.showModal);
  }
}

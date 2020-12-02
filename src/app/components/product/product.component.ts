import {AfterContentInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {ScreenService} from '../../services/screen.service';
import {ScreenSizeModel} from '../../models/ScreenSize.model';
import {Observable, Subject} from 'rxjs';
import {log} from 'util';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, AfterContentInit {
  @ViewChild('productDetails') productDetails: ElementRef;
  screenModel: ScreenSizeModel;
  imagesDimensions: ScreenSizeModel;
  productDetailsDimensions: ScreenSizeModel;
  pushed: boolean;
  size = new Subject<string>();
  width: string;
  contentLoaded: boolean;
  valami: { width: string };

  constructor(private screenService: ScreenService) {
  }

  ngOnInit(): void {
    this.productDetailsDimensions = {height: 0, width: 0};
    this.imagesDimensions = {height: 0, width: 0};
    this.screenModel = this.screenService.getScreenSize();
    this.setImagesWidth();
    this.setProductDetailsWidth();
    // this.disableScrolling();

  }

  @HostListener('window:resize', ['$event'])
  changeContentOnResize() {
    this.screenModel = this.screenService.getScreenSize();
    this.setImagesWidth();
    this.setProductDetailsWidth();
  }

  setProductDetailsWidth(): void {
    if (this.screenModel.width >= 900) {
      const productDetailsWidth = this.screenModel.width / 2.7;
      this.productDetailsDimensions.width = productDetailsWidth >= 355 ? productDetailsWidth : 355;
    } else {
      this.productDetailsDimensions.width = this.screenModel.width * 0.9;
    }
  }

  setImagesWidth(): void {
    if (this.screenModel.width >= 900) {
      this.imagesDimensions.height = this.screenModel.height / 2.7;
      const imagesWidth = this.screenModel.width / 2.7;
      this.imagesDimensions.width = imagesWidth >= 500 ? imagesWidth : 500;
    } else {
      this.imagesDimensions.width = this.screenModel.width * 0.9;
    }
  }

  openModal() {
    this.pushed = true;
    // this.pushed ? this.disableScrolling() : this.enableScrolling();
  }

  closeModal() {
    this.pushed = false;
    console.log('closed');
    // this.pushed ? this.disableScrolling() : this.enableScrolling();
  }

  ngAfterContentInit(): void {
    this.contentLoaded = true;
    if (this.contentLoaded) {
      this.size.subscribe(value => {
        console.log(value);
        this.valami.width = value;
      });
    }
  }

  /* disableScrolling() {
     const x = window.scrollX;
     const y = window.scrollY;
     window.onscroll = () => {
       window.scrollTo(x, y);
     };
   }

   enableScrolling() {
     window.onscroll = () => {
     };
   }*/
}

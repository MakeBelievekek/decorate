import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {ScreenService} from '../../services/screen.service';
import {ScreenSizeModel} from '../../models/ScreenSize.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @ViewChild('productDetails') productDetails: ElementRef;
  screenModel: ScreenSizeModel;
  imagesDimensions: ScreenSizeModel;
  productDetailsDimensions: ScreenSizeModel;
  pushed: boolean;

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

  pushPush() {
    this.pushed = !this.pushed;
    this.pushed ? this.disableScrolling() : this.enableScrolling();
  }

  disableScrolling() {
    const x = window.scrollX;
    const y = window.scrollY;
    window.onscroll = () => {
      window.scrollTo(x, y);
    };
  }

  enableScrolling() {
    window.onscroll = () => {
    };
  }
}

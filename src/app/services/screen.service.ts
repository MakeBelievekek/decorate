import {ElementRef, Injectable} from '@angular/core';
import {ScreenControlModel} from '../models/screenControl.model';
import {ScreenSizeModel} from '../models/ScreenSize.model';

@Injectable({
  providedIn: 'root',
})
export class ScreenService {
  content: any;
  screenControl: ScreenControlModel;
  screenSize: ScreenSizeModel;


  constructor() {

    this.screenControl = {largeScreen: false, smallScreen: false, smallDropdown: false};
    this.content = {
      productContainer: ElementRef,
      productContent: ElementRef,
      smallOrderDropDownContainer: ElementRef,
    };
    this.screenSize = {height: 0, width: 0};
  }


  getScreenSize(): ScreenSizeModel {
    this.screenSize.height = window.innerHeight;
    this.screenSize.width = window.innerWidth;
    return this.screenSize;
  }

  getContentMeasurements(): any {
    const topOfScreen = this.content.productContainer.nativeElement.offsetHeight;
    const widthOfContent = this.content.productContent.nativeElement.offsetWidth;
    return {top: topOfScreen, width: widthOfContent};
  }

  screenControlHandler(): void {
    if (this.screenSize.width >= 1000) {
      this.screenControlSetter('largeScreen');
    } else if (this.screenSize.width < 1000) {
      this.screenControlSetter('smallScreen');
    }
  }

  screenControlSetter(control: string): void {
    Object.keys(this.screenControl).forEach(key => {
      if (key === control) {
        this.screenControl[key] = true;
      } else {
        this.screenControl[key] = false;
      }
    });
  }

  smallDropDownHandler(): void {
    if (this.screenSize.width < 751) {
      this.screenControl.smallDropdown = true;
    } else {
      this.screenControl.smallDropdown = false;
    }
  }

  setContent(productContainer: ElementRef, productContent: ElementRef): void {
    this.content.productContainer = productContainer;
    this.content.productContent = productContent;
  }

  setSmallOrderDropDownContainer(smallOrderDropDownContainer: ElementRef): void {
    this.content.smallOrderDropDownContainer = smallOrderDropDownContainer;
  }

  getSmallOrderDropDownContainerHeight(): number {
    return this.content.smallOrderDropDownContainer.nativeElement.offsetHeight;
  }
}

import {ElementRef, HostListener, Injectable} from '@angular/core';
import {ScreenSizeModel} from "../models/ScreenSize.model";

@Injectable({
  providedIn: 'root'
})
export class ScreenService {
  content: ElementRef;

  constructor() {
  }


  getScreenSize(event?): ScreenSizeModel {
    return {height: window.innerHeight, width: window.innerWidth}
  }

  getContentHeight(): number {
    return this.content.nativeElement.offsetHeight;
  }


  setContent(content: ElementRef) {
    this.content = content;
  }
}

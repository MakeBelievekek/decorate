import {HostListener, Injectable} from '@angular/core';
import {ScreenSizeModel} from "../models/ScreenSize.model";

@Injectable({
  providedIn: 'root'
})
export class ScreenService {

  constructor() { }


  getScreenSize(event?) : ScreenSizeModel {
    return {height: window.innerHeight, width: window.innerWidth}
  }

}

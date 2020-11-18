import {AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import {ScreenSizeModel} from '../../../models/ScreenSize.model';

@Component({
  selector: 'app-product-images',
  templateUrl: './product-images.component.html',
  styleUrls: ['./product-images.component.css']
})
export class ProductImagesComponent implements OnInit {
  @ViewChild('bigImage') bigImgEle: ElementRef;
  @Input() imageDimension: ScreenSizeModel;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.imageDimension);
  }
}

import {AfterViewInit, Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ScreenSizeModel} from '../../../models/ScreenSize.model';
import {DummyProductModel} from '../../../models/dummyProductModel';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  @Input() productDetailsDimension: ScreenSizeModel;
  @Input() dummyProduct: DummyProductModel;
  constructor() {
  }

  ngOnInit(): void {
    this.dummyProduct = new DummyProductModel();
  }
}

import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ScreenSizeModel} from '../../../models/ScreenSize.model';
import {DummyProductModel} from '../../../models/dummyProductModel';

@Component({
  selector: 'app-product-details-new',
  templateUrl: './product-details-new.component.html',
  styleUrls: ['./product-details-new.component.css']
})
export class ProductDetailsNewComponent implements OnInit, AfterViewInit {
  @Input() productDetailsDimension: ScreenSizeModel;
  @Input() dummyProduct: DummyProductModel;
  @ViewChild('productDetailContainer') productDetailContainer: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
    this.dummyProduct = new DummyProductModel();
  }

  ngAfterViewInit(): void {
    console.log('hello from the other side: ', this.productDetailContainer.nativeElement.offsetWidth);
  }

}

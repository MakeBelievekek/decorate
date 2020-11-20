import {Component, Input, OnInit} from '@angular/core';
import {ScreenSizeModel} from '../../../models/ScreenSize.model';
import {DummyProductModel} from '../../../models/dummyProductModel';

@Component({
  selector: 'app-product-details-new',
  templateUrl: './product-details-new.component.html',
  styleUrls: ['./product-details-new.component.css']
})
export class ProductDetailsNewComponent implements OnInit {
  @Input() productDetailsDimension: ScreenSizeModel;
  @Input() dummyProduct: DummyProductModel;

  constructor() {
  }

  ngOnInit(): void {
    this.dummyProduct = new DummyProductModel();
  }

}

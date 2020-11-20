import {Component, Input, OnInit} from '@angular/core';
import {ScreenSizeModel} from '../../../models/ScreenSize.model';
import {DummyProductModel} from '../../../models/dummyProductModel';

@Component({
  selector: 'app-product-image-card',
  templateUrl: './product-image-card.component.html',
  styleUrls: ['./product-image-card.component.css']
})
export class ProductImageCardComponent implements OnInit {
  @Input() imageDimension: ScreenSizeModel;
  @Input() dummyProduct: DummyProductModel;
  constructor() { }

  ngOnInit(): void {
    this.dummyProduct = new DummyProductModel();
  }

}

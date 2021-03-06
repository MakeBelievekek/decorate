import {Component, Input, OnInit} from '@angular/core';
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
  openDesc: string;

  constructor() {
  }

  ngOnInit(): void {
    this.dummyProduct = new DummyProductModel();
  }

  handelDesc(descType: string): void {
    if (this.openDesc === descType) {
      this.openDesc = undefined;
    } else {
      this.openDesc = descType;
    }
  }
}

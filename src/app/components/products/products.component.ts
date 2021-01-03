import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

import {FilterModel} from '../../models/filterModel';
import {ScreenControlModel} from '../../models/screenControl.model';
import {ScreenService} from '../../services/screen.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  @ViewChild('productContainer') productContainer: ElementRef;
  @ViewChild('productContent') productContent: ElementRef;
  screenControl: ScreenControlModel;
  filter = new FilterModel();


  constructor(private screenService: ScreenService) {
  }

  ngOnInit(): void {
    this.screenControl = this.screenService.screenControl;
  }

  setScreenAttributes() {
    // this.screenService.setContent(this.productContainer, this.productContent);
  }
}

import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {first, pluck, shareReplay, skip} from 'rxjs/operators';

import {FilterModel} from '../../models/filterModel';
import {ProductModel} from '../../models/productModel';
import {ScreenControlModel} from '../../models/screenControl.model';
import {ScreenService} from '../../services/screen.service';
import {Observable, Subject} from 'rxjs';
import {CategoryStore} from '../../services/stores/category-store';
import {ProductCategoryModalModel} from '../../models/ProductCategoryModalModel';

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


  constructor(private screenService: ScreenService,
              private activatedRoute: ActivatedRoute,
              private categoryStore: CategoryStore) {
  }

  ngOnInit(): void {
    this.screenControl = this.screenService.screenControl;
    console.log('ezért csináltad');
  }

  setScreenAttributes() {
    // this.screenService.setContent(this.productContainer, this.productContent);
  }
}

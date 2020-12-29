import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

import { FilterModel } from '../../models/filterModel';
import { ProductModel } from '../../models/productModel';
import { ScreenControlModel } from '../../models/screenControl.model';
import { NavigateService } from '../../services/navigateService';
import { ProductService } from '../../services/product.service';
import { ScreenService } from '../../services/screen.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit, OnDestroy {
    @ViewChild('productContainer') productContainer: ElementRef;
    @ViewChild('productContent') productContent: ElementRef;
    screenControl: ScreenControlModel;
    filter: FilterModel = new class implements FilterModel {
        attr: string[] = [];
        attrType: string;
        productType: string;
        productDatabaseName: string;
    };
    products: ProductModel[] = [];
    filterObservable$: Observable<FilterModel> = this.navigateService.filterObservable$;
    subscription: Subscription;

    constructor(private screenService: ScreenService,
                private activatedRoute: ActivatedRoute,
                private productService: ProductService,
                private navigateService: NavigateService) {

    }

    ngOnInit(): void {

        this.subscription = this.filterObservable$.pipe(take(1))
            .subscribe((data) => {
                this.filter = data;
                //  console.log(this.filter.productType)
                if (!this.filter?.attr) {
                    this.productService.getProducts(this.filter?.productType).subscribe((products) => {
                        this.products = products;
                    });
                } else {
                    this.productService.getProductsWithQuery(this.filter.productDatabaseName, this.filter.attr).subscribe((data) => {
                        this.products = data;
                    });
                }
            });
        this.screenControl = this.screenService.screenControl;
    }

    setScreenAttributes() {
        this.screenService.setContent(this.productContainer, this.productContent);
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}

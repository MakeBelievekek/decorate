import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScreenControlModel } from '../../models/screenControl.model';
import { LoadingService } from '../../services/loading.service';
import { ProductService } from '../../services/product.service';
import { ScreenService } from '../../services/screen.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
    @ViewChild('productContainer') productContainer: ElementRef;
    @ViewChild('productContent') productContent: ElementRef;
    screenControl: ScreenControlModel;
    productCategoryParam: string = '';
    productAttrType: string = '';
    productAttr: string = '';

    constructor(private screenService: ScreenService,
                private activatedRoute: ActivatedRoute,
                private productService: ProductService) {

    }

    ngOnInit(): void {
        this.screenControl = this.screenService.screenControl;
        this.activatedRoute.queryParams.subscribe(params => {
            if (params) {
                this.productCategoryParam = params['termekkategoria'];
                this.productAttrType = params['tipus'];
                this.productAttr = params['attributum'];
                this.productService.getProducts(this.productCategoryParam, this.productAttrType, this.productAttr).
                subscribe((data) => {console.log(data);});
            }
        });
    }

    setScreenAttributes() {
        this.screenService.setContent(this.productContainer, this.productContent);
    }
}

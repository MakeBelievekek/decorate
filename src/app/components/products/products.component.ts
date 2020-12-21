import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilterModel } from '../../models/filterModel';
import { ProductModel } from '../../models/productModel';
import { ScreenControlModel } from '../../models/screenControl.model';
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
    filter: FilterModel = new class implements FilterModel {
        attr: string[];
        attrType: string;
        productType: string;
    };
    products: ProductModel[] = [];

    constructor(private screenService: ScreenService,
                private activatedRoute: ActivatedRoute,
                private productService: ProductService) {

    }

    ngOnInit(): void {
        this.screenControl = this.screenService.screenControl;
        this.activatedRoute.queryParams.subscribe(params => {
            if (params) {
                this.filter.attr = [];
                this.filter.productType = params['termekkategoria'];
                this.filter.attrType = params['tipus'];
                this.filter.attr.push(params['attributum']);
                console.log(this.filter);
                this.productService.getProducts(this.filter.productType, this.filter.attrType, this.filter.attr).subscribe((data) => {
                        this.products = data;
                        console.log(this.products);
                    },
                    () => {},
                    () => {});
            }
        });
    }

    setScreenAttributes() {
        this.screenService.setContent(this.productContainer, this.productContent);
    }
}

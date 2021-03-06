import { Component, Input, OnInit } from '@angular/core';
import { DummyProductModel } from '../../../../models/dummyProductModel';
import { ProductModel } from '../../../../models/productModel';

@Component({
    selector: 'app-product-list-item',
    templateUrl: './product-list-item.component.html',
    styleUrls: ['./product-list-item.component.css'],
})
export class ProductListItemComponent implements OnInit {
    showControl: boolean;
    likeHover: boolean;
    @Input() product: ProductModel;
    showTooltip: boolean;
    placeholder: string;


    constructor() {
    }

    ngOnInit(): void {
    }

    toggleLikeHover(): void {
        this.likeHover = !this.likeHover;
    }

    toggleControl(): void {
        this.showControl = !this.showControl;
    }


    toggleTooltip(event): void {
        console.log(event);
        this.placeholder = event;
        this.showTooltip = !this.showTooltip;
    }
}

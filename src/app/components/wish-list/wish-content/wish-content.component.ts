import { Component, Input, OnInit } from '@angular/core';
import { ProductListItemForLocal } from '../../../models/productListItemForLocal';

const WISH_KEY = 'local_wishList';

@Component({
    selector: 'app-wish-content',
    templateUrl: './wish-content.component.html',
    styleUrls: ['./wish-content.component.css'],
})
export class WishContentComponent implements OnInit {

    @Input() productsFromLocalStorage: ProductListItemForLocal[] = [];

    constructor() {

    }

    ngOnInit(): void {

    }


}

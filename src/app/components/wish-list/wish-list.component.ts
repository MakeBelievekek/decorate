import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductListItemForLocal } from '../../models/productListItemForLocal';
import { LocalStorageService } from '../../services/localStorage.service';
import { PaymentService } from '../../services/payment.service';

@Component({
    selector: 'app-wish-list',
    templateUrl: './wish-list.component.html',
    styleUrls: ['./wish-list.component.css'],
})
export class WishListComponent implements OnInit {
    productsFromLocalStorage: ProductListItemForLocal[];

    constructor( private route: ActivatedRoute) { }

    ngOnInit(): void {
        if (this.route.snapshot.data.wishListItems != null) {
            this.productsFromLocalStorage = this.route.snapshot.data.wishListItems;
        }
        console.log(this.route.snapshot.data.wishListItems);
    }


}

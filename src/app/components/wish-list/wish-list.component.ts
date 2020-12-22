import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductListItemForLocal} from '../../models/productListItemForLocal';
import { LocalStorageService } from '../../services/localStorage.service';

@Component({
    selector: 'app-wish-list',
    templateUrl: './wish-list.component.html',
    styleUrls: ['./wish-list.component.css'],
})
export class WishListComponent implements OnInit {
    productsFromLocalStorage: ProductListItemForLocal[];

    constructor(private route: ActivatedRoute, private localStorageService: LocalStorageService) { }

    ngOnInit(): void {
        if (this.route.snapshot.data.wishListItems != null) {
            this.productsFromLocalStorage = this.route.snapshot.data.wishListItems;
        }
        this.localStorageService.remove.subscribe((id) => {
            for (let i = 0; i < this.productsFromLocalStorage.length; i++) {
                if (this.productsFromLocalStorage[i].id === id) {
                    this.productsFromLocalStorage.splice(i, 1);
                }
            }
        });

    }


}

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductListItemForLocal } from '../models/productListItemForLocal';
import { LocalStorageService } from './localStorage.service';
import { ProductService } from './product.service';

const CART_KEY = 'local_cartList';

@Injectable({
    providedIn: 'root',
})
export class BasketContentResolver implements Resolve<ProductListItemForLocal[]> {

    isEmpty: boolean = false;

    constructor(private localStorageService: LocalStorageService, private productService: ProductService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductListItemForLocal[]> {
        if (this.localStorageService.getItemsFromLocalStorage(CART_KEY).length !== 0) {
            this.isEmpty = true;
        }
        if (this.isEmpty) {
            console.log(this.localStorageService.getItemsFromLocalStorage(CART_KEY));
            const productIds = [];
            for (const prod of this.localStorageService.getItemsFromLocalStorage(CART_KEY)) {
                productIds.push(prod.id);
            }
            productIds.map(String);
            const prodString = productIds.toString();
            return this.productService.getProductsForLocalStorage(prodString);
        } else {
            return null;
        }
    }

}

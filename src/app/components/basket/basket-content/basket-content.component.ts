import { Component, OnInit } from '@angular/core';
import { BasketProdModel } from '../../../models/basket-prod-model';
import { ProductListItemForLocal } from '../../../models/productListItemForLocal';
import { LocalStorageService } from '../../../services/localStorage.service';
import { ProductService } from '../../../services/product.service';

const CART_KEY = 'local_cartList';

@Component({
    selector: 'app-basket-content',
    templateUrl: './basket-content.component.html',
    styleUrls: ['./basket-content.component.css'],
})
export class BasketContentComponent implements OnInit {

    allTotal: number = 0;
    productsFromLocalStorage: ProductListItemForLocal[];


    constructor(private localStorageService: LocalStorageService, private productService: ProductService) {

    }

    ngOnInit(): void {
      if (this.localStorageService.getItemsFromLocalStorage(CART_KEY)) {
        let productIds = [];
            for (let prod of this.localStorageService.getItemsFromLocalStorage(CART_KEY)) {
                productIds.push(prod.id);
            }
            productIds.map(String);
            let prodString = productIds.toString();
            this.productService.getProductsForLocalStorage(prodString).subscribe((data) => {
                this.productsFromLocalStorage = data;
            },()=>{},()=>{this.startingPrice()});
        }
    }

    getAllTotalPrice(event) {
        if (event.plusOrNot === false) {
            this.allTotal -= event.value;
        } else {
            this.allTotal += event.value;
        }
        console.log(this.allTotal)
    }

    startingPrice() {
        for (let par of this.productsFromLocalStorage) {
            for (let loc of this.localStorageService.getItemsFromLocalStorage(CART_KEY)) {
                if (par.id === loc.id)
                    this.allTotal += (par.price * loc.qty);
            }
        }
    }
}

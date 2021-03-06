import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductListItemForLocal } from '../../../models/productListItemForLocal';
import { TotalPriceModel } from '../../../models/totalPriceModel';
import { LocalStorageService } from '../../../services/localStorage.service';

const CART_KEY = 'local_cartList';

@Component({
    selector: 'app-basket-item',
    templateUrl: './basket-item.component.html',
    styleUrls: ['./basket-item.component.css'],
})
export class BasketItemComponent implements OnInit {

    constructor(private localStorageService: LocalStorageService) {
    }

    @Input() product: ProductListItemForLocal;
    @Output() totalPrice: EventEmitter<TotalPriceModel> = new EventEmitter<TotalPriceModel>();
    total: TotalPriceModel = new class implements TotalPriceModel {
        plusOrNot: boolean;
        value: number;
    };
    totalPriceCounter: number;
    localQty: number = 1;


    ngOnInit(): void {
        this.totalPriceCounter = this.product.price;
        if (this.localStorageService.getItemsFromLocalStorage(CART_KEY)) {
            for (let prod of this.localStorageService.getItemsFromLocalStorage(CART_KEY)) {
                if (prod.id === this.product.id) {
                    this.localQty = prod.qty;
                    this.totalPriceCounter = this.product.price * this.localQty;
                }
            }
        }

    }

    countChange(event) {
        this.totalPriceCounter = event.value * this.product.price;
        this.countAllTotal(event);
    }

    countAllTotal(event) {
        this.total.value = this.product.price;
        this.total.plusOrNot = event.plusOrNot;
        this.totalPrice.emit(this.total);
    }

    removeFromBasket() {
        this.localStorageService.remove.next(this.product.id);
        this.localStorageService.removeFromLocal(this.product.id, CART_KEY);
    }
}

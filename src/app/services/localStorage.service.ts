import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Subject } from 'rxjs';
import { LocalDetailsModel } from '../models/localDetailsModel';
import { LocalProductModel } from '../models/localProductModel';


@Injectable({
    providedIn: 'root',
})
export class LocalStorageService {

    remove = new Subject<number>();

    constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {
    }

    public storeOnLocalStorage(item: LocalProductModel, key: string): void {

        if (!this.getItemIdFromLocalStorage(key).includes(item.id)) {
            let currentCartList = this.storage.get(key) || [];
            currentCartList.push({
                id: item.id,
                qty: item.qty,
            });
            this.storage.set(key, currentCartList);
        } else {
            this.updateItemFromProduct(item.id, item.qty, key);
        }
    }

    storeDetailsOnLocalStorage(data: LocalDetailsModel, key: string) {
        let details = this.storage.get(key) || [];
        details.push({
            lastname: data.lastName,
            firstname: data.firstName,
            email: data.email,
        });
        this.storage.set(key, details);
    }

    public getItemIdFromLocalStorage(key: string) {
        let id: number [] = [];
        for (let prod of this.storage.get(key) || []) {
            id.push(prod.id);
        }
        return id;
    }

    public getItemsFromLocalStorage(key: string) {
        return this.storage.get(key) || [];
    }

    updateItemFromBasket(id: number, qty: number, key: string) {
        let cart = this.getItemsFromLocalStorage(key);
        for (let prod of cart) {
            if (prod.id === id) {
                prod.qty = qty;
            }
        }
        this.storage.set(key, cart);
    }

    updateItemFromProduct(id: number, qty: number, key: string) {
        let cart = this.getItemsFromLocalStorage(key);
        for (let prod of cart) {
            if (prod.id === id) {
                prod.qty += qty;
            }
        }
        this.storage.set(key, cart);
    }

    deleteItem(key: string) {
        this.storage.remove(key);
    }

    saveCookiePolicy(key: string, value: boolean) {
        this.storage.set(key, value);
    }

    removeFromLocal(id: number, key: string) {
        console.log(id)
        let cart: LocalProductModel[] = this.getItemsFromLocalStorage(key);
        let newCart: LocalProductModel[] = [];
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].id !== id) {
                newCart.push(cart[i]);
            }
        }
        this.deleteItem(key);
        newCart.forEach(value => this.storeOnLocalStorage(value, key));
    }
}

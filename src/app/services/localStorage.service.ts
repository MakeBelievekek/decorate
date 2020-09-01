import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { LocalDetailsModel } from '../models/localDetailsModel';
import { LocalProductModel } from '../models/localProductModel';


@Injectable({
    providedIn: 'root',
})
export class LocalStorageService {


    constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {
    }

    public storeOnLocalStorage(item: LocalProductModel, key: string): void {
        const currentCartList = this.storage.get(key) || [];
        currentCartList.push({
            id: item.prodId,
            qty: item.quantity,
        });
        this.storage.set(key, currentCartList);
    }

    storeDetailsOnLocalStorage(data: LocalDetailsModel, key: string) {
        const details = this.storage.get(key) || [];
        details.push({
            lastname: data.lastname,
            firstname: data.firstname,
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
        console.log(this.storage.get(key) || []);
        return this.storage.get(key) || [];
    }

    updateItem(id: number, qty: number, key: string) {
        let cart = this.getItemsFromLocalStorage(key);
        for (let prod of cart) {
            if (prod.id == id) {
                prod.qty = qty;
            }
        }
        this.storage.set(key, cart);
    }

    deleteItem(key: string) {
        this.storage.remove(key);
    }

}

import {Inject, Injectable} from "@angular/core";
import {LOCAL_STORAGE, StorageService} from 'ngx-webstorage-service';
import {LocalProductModel} from "../models/localProductModel";


const STORAGE_KEY = 'local_cartList';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {


  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {
  }

  public storeOnLocalStorage(item: LocalProductModel): void {
    const currentCartList = this.storage.get(STORAGE_KEY) || [];
    currentCartList.push({
      id: item.prodId,
      qty: item.quantity
    });
    this.storage.set(STORAGE_KEY, currentCartList);
  }

  public getItemIdFromLocalStorage() {
    let id: number [] = [];
    for (let prod of this.storage.get(STORAGE_KEY) || []) {
      id.push(prod.id)
    }
    return id;
  }

  public getItemsFromLocalStorage(key:string) {
    return this.storage.get(key) || [];
  }

  updateItem(id: number, qty: number) {
    let cart = this.getItemsFromLocalStorage(STORAGE_KEY);
    for (let prod of cart) {
      if (prod.id == id) {
        prod.qty = qty;
      }
    }
    this.storage.set(STORAGE_KEY, cart)
  }
}

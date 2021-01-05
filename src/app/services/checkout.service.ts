import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ProductListItemForLocal } from '../models/productListItemForLocal';

@Injectable({
    providedIn: 'root',
})
export class CheckoutService {

    private productsSubject = new Subject<ProductListItemForLocal[]>();
    productsObservable$: Observable<ProductListItemForLocal[]> = this.productsSubject.asObservable();

    sendData(products: ProductListItemForLocal[]) {
        this.productsSubject.next(products);
    }

    constructor() {}
}

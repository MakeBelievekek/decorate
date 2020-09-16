import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductListItemForLocal } from '../models/productListItemForLocal';
import { ShippingOptions } from '../models/shippingOptions';

const PRODUCT_BASE_URL = 'https://localhost:8443/product';
const CART_KEY = 'local_cartList';
const header = new HttpHeaders().set('Cache-Control', 'max-age=604800');

@Injectable({
    providedIn: 'root',
})
export class ProductService {

    constructor(private http: HttpClient) {
    }

    getProductsForLocalStorage(productsIds: string): Observable<ProductListItemForLocal[]> {
        console.log(productsIds);
        return this.http.get<any>(PRODUCT_BASE_URL + '/local/' + productsIds, {headers: header});
    }

    getShippingOptions(): Observable<ShippingOptions[]> {
        return this.http.get<ShippingOptions[]>(PRODUCT_BASE_URL + '/shippingOptions');
    }
}

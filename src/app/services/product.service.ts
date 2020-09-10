import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductListItemForLocal } from '../models/productListItemForLocal';

const PRODUCT_BASE_URL = 'https://localhost:8443/product/local/';
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
        return this.http.get<any>(PRODUCT_BASE_URL + productsIds, {headers: header});


    }

}

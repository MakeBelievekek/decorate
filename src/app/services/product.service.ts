import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ProductListItemForLocal } from '../models/productListItemForLocal';
import { ShippingOptions } from '../models/shippingOptions';

const PRODUCT_BASE_URL = environment.apiUrl + 'api/public/product';
const CART_KEY = 'local_cartList';

@Injectable({
    providedIn: 'root',
})
export class ProductService {

    constructor(private http: HttpClient) {
    }

    getProductsForLocalStorage(productsIds: string): Observable<ProductListItemForLocal[]> {
        return this.http.get<any>(PRODUCT_BASE_URL + '/local/' + productsIds);
    }

    getShippingOptions(): Observable<ShippingOptions[]> {
        return this.http.get<ShippingOptions[]>(PRODUCT_BASE_URL + '/shippingOptions');
    }

  getProducts(productCategoryParam: string, productAttrType: string, productAttr: string) {
        const params = new HttpParams()
            .set('productCategory',productCategoryParam )
            .set('attrType',productAttrType )
            .set('attr',productAttr )
        ;
        return this.http.get(PRODUCT_BASE_URL, {params});
    }
}

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { ProductCategoryModalModel } from '../models/ProductCategoryModalModel';
import { ProductListItemForLocal } from '../models/productListItemForLocal';
import { ProductModel } from '../models/productModel';
import { ShippingOptions } from '../models/shippingOptions';

const PRODUCT_BASE_URL = environment.apiUrl + 'api/public/product';
const CART_KEY = 'local_cartList';

@Injectable({
    providedIn: 'root',
})
export class ProductService {

    constructor(private http: HttpClient) {
    }

    productCategoryModelSubject = new Subject<ProductCategoryModalModel[]>();

    getProductsForLocalStorage(productsIds: string): Observable<ProductListItemForLocal[]> {
        return this.http.get<any>(PRODUCT_BASE_URL + '/local/' + productsIds);
    }

    getShippingOptions(): Observable<ShippingOptions[]> {
        return this.http.get<ShippingOptions[]>(PRODUCT_BASE_URL + '/shippingOptions');
    }

    getProducts(productCategoryParam: string, productAttrType: string, productAttr: string[]): Observable<ProductModel[]> {
        const params = new HttpParams()
            .set('productCategory', productCategoryParam)
            .set('attrType', productAttrType)
            .set('attrs', productAttr.join(','))
        ;
        return this.http.get<ProductModel[]>(PRODUCT_BASE_URL, {params});
    }

    getAttributesForDropdown(): Observable<ProductCategoryModalModel[]> {
        return this.http.get<ProductCategoryModalModel[]>(PRODUCT_BASE_URL + '/productTypes');
    }
}

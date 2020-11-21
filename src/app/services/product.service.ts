import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ProductListItemForLocal} from '../models/productListItemForLocal';
import {ShippingOptions} from '../models/shippingOptions';
import {environment} from '../../environments/environment';

const PRODUCT_BASE_URL = environment.apiUrl;
const CART_KEY = 'local_cartList';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  getProductsForLocalStorage(productsIds: string): Observable<ProductListItemForLocal[]> {
    console.log(productsIds);
    return this.http.get<any>(PRODUCT_BASE_URL + 'product/local/' + productsIds);
  }

  getShippingOptions(): Observable<ShippingOptions[]> {
    return this.http.get<ShippingOptions[]>(PRODUCT_BASE_URL + 'product/shippingOptions');
  }
}

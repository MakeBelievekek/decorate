import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ProductListItemForLocal} from "../models/productListItemForLocal";
import {Observable} from "rxjs";

const PRODUCT_BASE_URL = 'https://localhost:8443/product/local/';
const CART_KEY = 'local_cartList';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  getProductsForLocalStorage(productsIds: string): Observable<ProductListItemForLocal[]> {
    console.log(productsIds)
    return this.http.get<ProductListItemForLocal[]>(PRODUCT_BASE_URL + productsIds);
  }

}

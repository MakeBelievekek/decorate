import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ProductListItemForLocal} from "../models/productListItemForLocal";
import {Observable} from "rxjs";
import {rejects} from "assert";
import {PromiseType} from "protractor/built/plugins";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {delay} from "rxjs/operators";

const PRODUCT_BASE_URL = 'https://localhost:8443/product/local/';
const CART_KEY = 'local_cartList';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  getProductsForLocalStorage(productsIds: string): Observable<ProductListItemForLocal[]> {
    return this.http.get<ProductListItemForLocal[]>(PRODUCT_BASE_URL + productsIds);
  }

}

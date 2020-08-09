import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ProductListItemForLocal} from "../models/productListItemForLocal";
import {Observable} from "rxjs";
import {ProductModel} from "../models/product-model";

const PRODUCT_BASE_URL = 'https://localhost:8443';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }


  getProductsForLocalStorage(productsIds: string): Observable<ProductListItemForLocal[]> {
    return this.http.get<ProductListItemForLocal[]>(PRODUCT_BASE_URL + '/product/local' + productsIds)
  }
}

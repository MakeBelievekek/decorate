import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {ProductListItemForLocal} from "../models/productListItemForLocal";
import {Observable} from "rxjs";
import {LocalStorageService} from "./localStorage.service";
import {ProductService} from "./product.service";

const CART_KEY = 'local_cartList';

@Injectable({
  providedIn: 'root'
})
export class BasketContentResolver implements Resolve<ProductListItemForLocal[]> {

  constructor(private localStorageService: LocalStorageService, private productService: ProductService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductListItemForLocal[]> {

    if (this.localStorageService.getItemsFromLocalStorage(CART_KEY)) {
      let productIds = [];
      for (let prod of this.localStorageService.getItemsFromLocalStorage(CART_KEY)) {
        productIds.push(prod.id);
        console.log(productIds)
      }
      productIds.map(String);
      let prodString = productIds.toString();
      return this.productService.getProductsForLocalStorage(prodString)
    }
  }

}

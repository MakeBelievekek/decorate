import { Component, Input, OnInit } from '@angular/core';
import { ProductListItemForLocal } from '../../../models/productListItemForLocal';
import { LocalStorageService } from '../../../services/localStorage.service';

const CART_KEY = 'local_cartList';

@Component({
  selector: 'app-basket-content',
  templateUrl: './basket-content.component.html',
  styleUrls: ['./basket-content.component.css'],
})
export class BasketContentComponent implements OnInit {

  allTotal: number = 0;
  @Input() productsFromLocalStorage: ProductListItemForLocal[] = [];

  constructor(private localStorageService: LocalStorageService) {

  }

  ngOnInit(): void {

    this.startingPrice()
console.log(this.productsFromLocalStorage)
  }

  getAllTotalPrice(event) {
    if (event.plusOrNot === false) {
      this.allTotal -= event.value;
    } else {
      this.allTotal += event.value;
    }
    console.log(this.allTotal)
  }

  startingPrice() {
    for (let par of this.productsFromLocalStorage) {
      for (let loc of this.localStorageService.getItemsFromLocalStorage(CART_KEY)) {
        if (par.id === loc.id)
          this.allTotal += (par.price * loc.qty);
      }
    }
  }
}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BasketProdModel} from '../../../models/basket-prod-model';
import {TotalPriceModel} from '../../../models/totalPriceModel';
import {LocalStorageService} from "../../../services/localStorage.service";
import {BasketService} from "../../../services/basket.service";

const STORAGE_KEY = 'local_cartList';

@Component({
  selector: 'app-basket-item',
  templateUrl: './basket-item.component.html',
  styleUrls: ['./basket-item.component.css'],
})
export class BasketItemComponent implements OnInit {

  constructor(private localStorageService: LocalStorageService, private basketService: BasketService) {
  }

  @Input() product: BasketProdModel;
  @Output() totalPrice: EventEmitter<TotalPriceModel> = new EventEmitter<TotalPriceModel>();
  total: TotalPriceModel = new class implements TotalPriceModel {
    plusOrNot: boolean;
    value: number;
  };
  totalPriceCounter: number;
  localQty: number = 1;
  valami: string;

  ngOnInit(): void {
    this.totalPriceCounter = this.product.price;
    if (this.localStorageService.getItemsFromLocalStorage(STORAGE_KEY) != null) {
      for (let prod of this.localStorageService.getItemsFromLocalStorage(STORAGE_KEY)) {
        if (prod.id === this.product.itemNo) {
          this.localQty = prod.qty;
          this.totalPriceCounter = this.product.price * this.localQty;
        }
      }
    }
  }

  countChange(event) {
    this.totalPriceCounter = event.value * this.product.price;
    this.countAllTotal(event);
  }

  countAllTotal(event) {
    this.total.value = this.product.price;
    this.total.plusOrNot = event.plusOrNot;
    this.totalPrice.emit(this.total);
  }
}

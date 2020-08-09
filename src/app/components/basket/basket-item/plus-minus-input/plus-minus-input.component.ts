import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TotalPriceModel} from '../../../../models/totalPriceModel';
import {LocalStorageService} from "../../../../services/localStorage.service";
import {LocalProductModel} from "../../../../models/localProductModel";

@Component({
  selector: 'app-plus-minus-input',
  templateUrl: './plus-minus-input.component.html',
  styleUrls: ['./plus-minus-input.component.css'],
})
export class PlusMinusInputComponent implements OnInit {

  constructor(private localStorageService: LocalStorageService) {

  }

  @Input() initialValue;
  @Input() step: number = 0;
  @Input() min: number = 0;
  @Input() max: number = 0;
  @Input() symbol: string;
  @Input() ariaLabelLess: string;
  @Input() ariaLabelMore: string;
  @Input() prodId: number;
  @Output() counter: EventEmitter<TotalPriceModel> = new EventEmitter();
  total: TotalPriceModel = new class implements TotalPriceModel {
    plusOrNot: boolean;
    value: number;
  };
  item: LocalProductModel = new class implements LocalProductModel {
    prodId: number;
    quantity: number;
  };

  renderedValue: string;
  value: number = 0;

  ngOnInit() {
    this.value = this.initialValue;
    this.renderedValue = this.value.toString();
    this.setProdToLocal();
    if (this.localStorageService.getItemIdFromLocalStorage().length != 0) {
      if (!this.localStorageService.getItemIdFromLocalStorage().includes(this.item.prodId)) {
        this.localStorageService.storeOnLocalStorage(this.item)
      }
    } else {
      this.localStorageService.storeOnLocalStorage(this.item)
    }
  }

  toggleMore = () => {
    if (this.step + this.value <= this.max) {
      this.value = this.value + this.step;
      this.renderedValue = this.value.toString();
      this.total.value = this.value;
      this.total.plusOrNot = true;
      this.counter.emit(this.total);
      this.localStorageService.updateItem(this.prodId, this.value);
    }
  };

  toggleLess = () => {
    if (this.value - this.step >= this.min) {
      this.value = this.value - this.step;
      this.renderedValue = this.value.toString();
      this.total.value = this.value;
      this.total.plusOrNot = false;
      this.counter.emit(this.total);
      this.localStorageService.updateItem(this.prodId, this.value);
    }
  };

  setProdToLocal() {
    this.item.quantity = this.value;
    this.item.prodId = this.prodId
  }
}

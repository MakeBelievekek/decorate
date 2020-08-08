import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BasketProdModel } from '../../../models/basket-prod-model';
import { TotalPriceModel } from '../../../models/totalPriceModel';

@Component({
    selector: 'app-basket-item',
    templateUrl: './basket-item.component.html',
    styleUrls: ['./basket-item.component.css'],
})
export class BasketItemComponent implements OnInit {

    constructor() { }

    @Input() product: BasketProdModel;
    @Output() totalPrice: EventEmitter<TotalPriceModel> = new EventEmitter<TotalPriceModel>();
    total: TotalPriceModel = new class implements TotalPriceModel {
        plusOrNot: boolean;
        value: number;
    };
    totalPriceCounter: number;

    ngOnInit(): void {
        this.totalPriceCounter = this.product.price;
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

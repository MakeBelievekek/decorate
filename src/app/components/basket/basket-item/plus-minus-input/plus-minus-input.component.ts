import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LocalProductModel } from '../../../../models/localProductModel';
import { TotalPriceModel } from '../../../../models/totalPriceModel';
import { LocalStorageService } from '../../../../services/localStorage.service';

const CART_KEY = 'local_cartList';

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
    @Output() numberOfQty: EventEmitter<number> = new EventEmitter<number>();
    total: TotalPriceModel = new class implements TotalPriceModel {
        plusOrNot: boolean;
        value: number;
    };
    item: LocalProductModel = new class implements LocalProductModel {
        id: number;
        productType: string;
        qty: number;
    };
    renderedValue: string;
    value: number = 0;

    ngOnInit() {
        this.value = this.initialValue ? this.value = this.initialValue : 0;
        this.setProdToLocal();
        this.renderedValue = this.value.toString();
    }

    toggleMore = () => {
        if (this.step + this.value <= this.max) {
            this.value = this.value + this.step;
            this.renderedValue = this.value.toString();
            this.total.value = this.value;
            this.total.plusOrNot = true;
            this.counter.emit(this.total);
            this.numberOfQty.emit(this.value);
            console.log(this.value);

        }
    };

    addToLocal() {
        this.localStorageService.updateItemFromBasket(this.prodId, this.value, CART_KEY);
    }

    toggleLess = () => {
        if (this.value - this.step >= this.min) {
            this.value = this.value - this.step;
            this.renderedValue = this.value.toString();
            this.total.value = this.value;
            this.total.plusOrNot = false;
            this.counter.emit(this.total);
            this.numberOfQty.emit(this.value);
            console.log(this.value);
        }
    };

    removeFromLocal() {

        this.localStorageService.updateItemFromBasket(this.prodId, this.value, CART_KEY);

    }

    setProdToLocal() {
        this.item.qty = this.value;
        this.item.id = this.prodId;
    }
}

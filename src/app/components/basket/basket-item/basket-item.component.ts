import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ConfirmationService, Message, PrimeNGConfig } from 'primeng/api';
import { ProductListItemForLocal } from '../../../models/productListItemForLocal';
import { TotalPriceModel } from '../../../models/totalPriceModel';
import { LocalStorageService } from '../../../services/localStorage.service';

const CART_KEY = 'local_cartList';

@Component({
    selector: 'app-basket-item',
    templateUrl: './basket-item.component.html',
    styleUrls: ['./basket-item.component.css'],
})
export class BasketItemComponent implements OnInit {

    constructor(private localStorageService: LocalStorageService, private confirmationService: ConfirmationService, private toastr: ToastrService,
                private primengConfig: PrimeNGConfig) {
    }

    @Input() product: ProductListItemForLocal;
    @Output() totalPrice: EventEmitter<TotalPriceModel> = new EventEmitter<TotalPriceModel>();
    total: TotalPriceModel = new class implements TotalPriceModel {
        plusOrNot: boolean;
        value: number;
    };
    totalPriceCounter: number;
    localQty: number = 1;


    ngOnInit(): void {
        this.totalPriceCounter = this.product.price;
        if (this.localStorageService.getItemsFromLocalStorage(CART_KEY)) {
            for (let prod of this.localStorageService.getItemsFromLocalStorage(CART_KEY)) {
                if (prod.id === this.product.id) {
                    this.localQty = prod.qty;
                    this.totalPriceCounter = this.product.price * this.localQty;
                }
            }
        }
        this.primengConfig.ripple = true;
    }

    confirm(event: Event) {
        this.confirmationService.confirm({
            target: event.target,
            message: 'Biztos törli a terméket?',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.toastr.info('Termék eltávolítva');

            },
            reject: () => {

            },
        });
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

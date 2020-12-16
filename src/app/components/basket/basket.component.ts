import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaymentResponseModel } from '../../models/paymentResponseModel';
import { ProductListItemForLocal } from '../../models/productListItemForLocal';
import { LocalStorageService } from '../../services/localStorage.service';
import { PaymentService } from '../../services/payment.service';

@Component({
    selector: 'app-basket',
    templateUrl: './basket.component.html',
    styleUrls: ['./basket.component.css'],
})
export class BasketComponent implements OnInit {
    total: number = 0;
    productsFromLocalStorage: ProductListItemForLocal[];
    response: PaymentResponseModel;

    constructor(private paymentService: PaymentService, private route: ActivatedRoute, private localStorageService: LocalStorageService) {
    }

    ngOnInit(): void {
        if (this.route.snapshot.data.basketItems != null) {
            this.productsFromLocalStorage = this.route.snapshot.data.basketItems;
        }
        this.localStorageService.remove.subscribe((id) => {
            for (let i = 0; i < this.productsFromLocalStorage.length; i++) {
                if (this.productsFromLocalStorage[i].id === id) {
                    this.productsFromLocalStorage.splice(i, 1);
                }
            }
        });
    }

    payment() {
        this.paymentService.transaction().subscribe((data) => {
            this.response = data;
        }, () => {
        }, () => {
            console.log(this.response);
        });
    }


}

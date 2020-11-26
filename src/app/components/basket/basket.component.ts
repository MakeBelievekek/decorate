import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaymentResponseModel } from '../../models/paymentResponseModel';
import { ProductListItemForLocal } from '../../models/productListItemForLocal';
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

    constructor(private paymentService: PaymentService, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        if (this.route.snapshot.data.basketItems != null) {
            this.productsFromLocalStorage = this.route.snapshot.data.basketItems;
        }
        console.log(this.route.snapshot.data.basketItems);
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

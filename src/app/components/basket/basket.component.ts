import { Component, OnInit } from '@angular/core';
import { PaymentResponseModel } from '../../models/paymentResponseModel';
import { PaymentService } from '../../services/payment.service';

@Component({
    selector: 'app-basket',
    templateUrl: './basket.component.html',
    styleUrls: ['./basket.component.css'],
})
export class BasketComponent implements OnInit {

    constructor(private paymentService: PaymentService) { }

    response: PaymentResponseModel;


    ngOnInit(): void {
    }

    payment() {
        this.paymentService.transaction().subscribe((data) => {this.response = data;}, () => {}, () => {console.log(this.response);});
    }


}

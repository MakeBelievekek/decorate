import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderModel } from '../models/orderModel';
import { PaymentResponseModel } from '../models/paymentResponseModel';
import { ResponseTransaction } from '../models/responseTransaction';

const PAYMENT_BASE_URL = 'https://localhost:8443/payment';

@Injectable({
    providedIn: 'root',
})
export class PaymentService {

    constructor(private http: HttpClient) {}


    transaction(): Observable<PaymentResponseModel> {
        let observable = this.http.get<PaymentResponseModel>(PAYMENT_BASE_URL);
        return observable;
    }

    sendingOrder(order: OrderModel) {
        return this.http.post(PAYMENT_BASE_URL + '/orderRequest', order);
    }
}

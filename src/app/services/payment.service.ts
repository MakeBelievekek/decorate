import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { BarionMessage } from '../models/barionMessage';
import { OrderModel } from '../models/orderModel';
import { PaymentResponseModel } from '../models/paymentResponseModel';

const PAYMENT_BASE_URL = environment.apiUrl + 'api/public/payment';

@Injectable({
    providedIn: 'root',
})
export class PaymentService {

    constructor(private http: HttpClient) {
    }

    transaction(): Observable<PaymentResponseModel> {
        const observable = this.http.get<PaymentResponseModel>(PAYMENT_BASE_URL);
        return observable;
    }

    sendingBarionOrder(order: OrderModel): Observable<any> {
        return this.http.post<any>(PAYMENT_BASE_URL + '/orderRequestBarion', order);
    }

    sendingOrder(order: OrderModel): Observable<any> {
        return this.http.post<any>(PAYMENT_BASE_URL + '/orderRequest', order);
    }

    completePayment(paymentId: string): Observable<BarionMessage> {
        return this.http.post<BarionMessage>(PAYMENT_BASE_URL + '/checkPaymentStatus', paymentId);
    }
}

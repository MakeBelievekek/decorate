import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { OrderModel } from '../models/orderModel';
import { PaymentAndOrderDto } from '../models/paymentAndOrderDto';
import { PaymentResponseModel } from '../models/paymentResponseModel';
import { ResponseMessage } from '../models/responseMessage';

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

    processOrder(order: OrderModel): Observable<any> {
        return this.http.post<any>(PAYMENT_BASE_URL + '/processOrder', order);
    }

    getOrderNumber(paymentId: string): Observable<ResponseMessage> {
        return this.http.get<ResponseMessage>(PAYMENT_BASE_URL + '/orderNumber/' + paymentId);
    }

    sendingOrder(order: OrderModel): Observable<ResponseMessage> {
        return this.http.post<ResponseMessage>(PAYMENT_BASE_URL + '/orderRequest', order);
    }

    completePayment(paymentId: string): Observable<PaymentAndOrderDto> {
        return this.http.post<PaymentAndOrderDto>(PAYMENT_BASE_URL + '/checkPaymentStatus', paymentId);
    }
}

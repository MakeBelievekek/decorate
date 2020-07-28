import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaymentResponseModel } from '../models/paymentResponseModel';

const PAYMENT_BASE_URL = 'https://localhost:8443';

@Injectable({
    providedIn: 'root',
})
export class PaymentService {

    constructor(private http: HttpClient) {}


    transaction(): Observable<PaymentResponseModel> {
        let observable = this.http.get<PaymentResponseModel>(PAYMENT_BASE_URL + '/payment');
        return observable;


    }
}

import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {OrderModel} from '../models/orderModel';
import {PaymentResponseModel} from '../models/paymentResponseModel';
import {environment} from '../../environments/environment';

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

  completePayment(paymentId: string): Observable<any> {
    return this.http.post<any>(PAYMENT_BASE_URL + '/paymentComplete', paymentId);
  }
}

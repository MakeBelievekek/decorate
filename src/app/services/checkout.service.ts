import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { OrderSubjectDto } from '../models/orderSubjectDto';

@Injectable({
    providedIn: 'root',
})
export class CheckoutService {

    private productsSubject = new BehaviorSubject<OrderSubjectDto>(null);
    productsObservable$: Observable<OrderSubjectDto> = this.productsSubject.asObservable();
    private orderComplete = new BehaviorSubject<boolean>(false);
    orderObservable$: Observable<boolean> = this.orderComplete.asObservable();
    private modalTrigger = new BehaviorSubject<boolean>(false);
    modalTriggerObservable$: Observable<boolean> = this.orderComplete.asObservable();

    provinces: string [] = ['Bács-Kiskun', 'Baranya', 'Békés', 'Borsod-Abaúj-Zemplén', 'Csongrád',
        'Fejér', 'Győr-Moson-Sopron', 'Hajdú-Bihar', 'Heves', 'Jász-Nagykun-Szolnok', 'Komárom-Esztergom',
        'Nógrád', 'Pest', 'Somogy', 'Szabolcs-Szatmár-Bereg', 'Tolna', 'Vas', 'Veszprém', 'Zala'];

    constructor() {}

    sendData(order: OrderSubjectDto) {
        this.productsSubject.next(order);
    }

    orderCompletion() {
        this.orderComplete.next(true);
    }

    openModal() {
        this.modalTrigger.next(true);
    }

    reset() {
        this.orderComplete.next(false);
        this.modalTrigger.next(false);
    }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { OrderSubjectDto } from '../models/orderSubjectDto';

@Injectable({
    providedIn: 'root',
})
export class CheckoutService {

    private productsSubject = new BehaviorSubject<OrderSubjectDto>(null);
    productsObservable$: Observable<OrderSubjectDto> = this.productsSubject.asObservable();
    private modalTrigger = new BehaviorSubject<boolean>(false);
    modalTriggerObservable$: Observable<boolean> = this.modalTrigger.asObservable().pipe(filter(value => !!value));


    provinces: string [] = ['Bács-Kiskun', 'Baranya', 'Békés', 'Borsod-Abaúj-Zemplén', 'Csongrád',
        'Fejér', 'Győr-Moson-Sopron', 'Hajdú-Bihar', 'Heves', 'Jász-Nagykun-Szolnok', 'Komárom-Esztergom',
        'Nógrád', 'Pest', 'Somogy', 'Szabolcs-Szatmár-Bereg', 'Tolna', 'Vas', 'Veszprém', 'Zala'];

    constructor() {
        console.log('SERVICE');
    }

    sendData(order: OrderSubjectDto) {
        this.productsSubject.next(order);
    }

    openModal(value: boolean) {
        this.modalTrigger.next(value);
    }

    reset() {
        this.modalTrigger.next(false);
    }
}

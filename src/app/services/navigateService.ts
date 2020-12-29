import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { FilterModel } from '../models/filterModel';

const curtainPath = 'fuggony';
const otherPath = '';

@Injectable({
    providedIn: 'root',
})
export class NavigateService {
    constructor() {}

    private filterModelSubject = new Subject<FilterModel>();
    filterObservable$: Observable<FilterModel> = this.filterModelSubject.asObservable();
    ngUnsubscribe$ = new Subject<void>();

    sendData(filter: FilterModel) {
        this.filterModelSubject.next(filter);
    }
}

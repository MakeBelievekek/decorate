import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { FilterModel } from '../models/filterModel';
import { RegexService } from './regexService';

const curtainPath = 'fuggony';
const otherPath = '';

@Injectable({
    providedIn: 'root',
})
export class NavigateService {
    constructor() {}

    private filterSubject = new BehaviorSubject<FilterModel>(null);
    filterObservable$: Observable<FilterModel> = this.filterSubject.asObservable();
    ngUnsubscribe = new Subject<void>();


    sendData(filter: FilterModel) {
        this.filterSubject.next(filter);
    }
}

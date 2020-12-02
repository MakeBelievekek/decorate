import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {AtpListItem} from '../models/atpListItem';
import {environment} from '../../environments/environment';

const BASKET_BASE_URL = environment.apiUrl + 'api/public/payment';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  private total = new Subject<number>();

  constructor(private http: HttpClient) {
  }

  sendTotalPrice(qty: number) {
    this.total.next(qty);
  }

  getTotalPrice(): Observable<number> {
    return this.total.asObservable();
  }

  getAtpList(): Observable<AtpListItem[]> {
    return this.http.get<AtpListItem[]>(BASKET_BASE_URL + '/atp');
  }
}

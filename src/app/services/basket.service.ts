import {Injectable} from "@angular/core";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  private total = new Subject<number>();


  sendTotalPrice(qty: number) {
    this.total.next(qty)
  }

  getTotalPrice(): Observable<number> {
    return this.total.asObservable();
  }
}

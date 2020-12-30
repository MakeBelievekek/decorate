import {Injectable} from '@angular/core';
import {ProductModel} from '../models/productModel';
import {shareReplay, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {ActivatedRouteSnapshot} from '@angular/router';
import {SearchModel} from '../models/searchModel';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {QueryParamService} from './query-param.service';
import {log} from 'util';

// TODO ennek sokkal jobb nevet kell kitalálni
const BASE_MAKE = environment.apiUrl + 'api/public/attribute';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  products$;

  constructor(private http: HttpClient) {
  }

  getProductsBySearchModel(searchModel): Observable<Array<ProductModel>> {
    this.products$ = this.http.post<Array<ProductModel>>(BASE_MAKE + '/wut', searchModel).pipe(
      shareReplay(),
    );
    return this.products$;
  }
}

import {Injectable} from '@angular/core';
import {ProductModel} from '../models/productModel';
import {shareReplay} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {ActivatedRouteSnapshot} from '@angular/router';
import {SearchModel} from '../models/searchModel';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {QueryParamService} from './query-param.service';

// TODO ennek sokkal jobb nevet kell kitalálni
const BASE_MAKE = environment.apiUrl + 'api/public/attribute';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor(private http: HttpClient,
              private queryParamService: QueryParamService) {
  }

  getProductsByQueryParams(queryParams): Observable<Array<ProductModel>> {
    const payLoad = this.queryParamService.createPayLoad(queryParams);
    return this.http.post<Array<ProductModel>>(BASE_MAKE + '/wut', payLoad).pipe(
      shareReplay(),
    );
  }
}

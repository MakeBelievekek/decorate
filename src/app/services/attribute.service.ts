import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {ProductCategoryModalModel} from '../models/ProductCategoryModalModel';
import {catchError, map, pluck, shareReplay} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {SearchModel} from '../models/searchModel';
import {ProductAttributes} from '../models/productAttributes';

const CATEGORY_BASE_URL = environment.apiUrl + 'api/public/attribute';


@Injectable({
  providedIn: 'root'
})
export class AttributeService {

  constructor(private http: HttpClient) {
  }

  getAllAttributesForAllProductType(): Observable<Array<ProductCategoryModalModel>> {
    return this.http.get<Array<ProductCategoryModalModel>>(CATEGORY_BASE_URL).pipe(
      shareReplay(),
      catchError(err => {
        console.log(err);
        return throwError(err);
      }),
    );
  }

  getAttributesForProductType(searchModel: SearchModel): Observable<ProductAttributes> {
    return this.http.post<ProductCategoryModalModel>(CATEGORY_BASE_URL + '/single-filter', searchModel).pipe(
      pluck('productAttributes'),
      shareReplay(),
      catchError(err => {
        console.log(err);
        return throwError(err);
      })
    );
  }
}

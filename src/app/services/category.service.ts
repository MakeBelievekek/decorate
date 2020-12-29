import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {ProductCategoryModalModel} from '../models/ProductCategoryModalModel';
import {catchError, shareReplay, take, tap} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {SearchModel} from '../models/searchModel';

const CATEGORY_BASE_URL = environment.apiUrl + 'api/public/attribute';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {
  }

  getAllCategories(): Observable<Array<ProductCategoryModalModel>> {
    return this.http.get<Array<ProductCategoryModalModel>>(CATEGORY_BASE_URL).pipe(
      shareReplay(),
      catchError(err => {
        console.log(err);
        return throwError(err);
      }),
    );
  }

  getCategoriesForFilterFromBackend(searchModel: SearchModel): Observable<ProductCategoryModalModel> {
    return this.http.post<ProductCategoryModalModel>(CATEGORY_BASE_URL + '/single-filter', searchModel).pipe(
      shareReplay(),
      catchError(err => {
        console.log(err);
        return throwError(err);
      })
    );
  }
}

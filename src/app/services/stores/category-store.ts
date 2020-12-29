import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {ProductCategoryModalModel} from '../../models/ProductCategoryModalModel';
import {environment} from '../../../environments/environment';
import {catchError, filter, first, flatMap, map, shareReplay, take, tap} from 'rxjs/operators';
import {log} from 'util';
import {CategoryService} from '../category.service';
import {SearchModel} from '../../models/searchModel';


@Injectable({
  providedIn: 'root'
})
export class CategoryStore {

  private filterCategories = new BehaviorSubject<Array<ProductCategoryModalModel>>([]);
  categoriesForFiltering$: Observable<Array<ProductCategoryModalModel>> = this.filterCategories.asObservable();
  private hasCategoriesLoaded = new BehaviorSubject<boolean>(false);
  hasCategoriesLoaded$ = this.hasCategoriesLoaded.asObservable();

  constructor(
    private categoryService: CategoryService) {
    this.loadCategoriesForFiltering().subscribe();
  }

  private loadCategoriesForFiltering(): Observable<Array<ProductCategoryModalModel>> {
    return this.categoryService.getAllCategories().pipe(
      take(1),
      tap((categories) => {
        this.filterCategories.next(categories);
        this.hasCategoriesLoaded.next(true);
      })
    );
  }

  getCategoriesForAttributeParams(searchModel: SearchModel): Observable<ProductCategoryModalModel> {
    return this.categoriesForFiltering$.pipe(
      take(1),
      flatMap((categoriesList) => categoriesList),
      filter((categories) => this.getCategoriesForFilter(categories, searchModel))
    );
  }

  private getCategoriesForFilter(productCategoriesModel: ProductCategoryModalModel, payLoad: SearchModel): boolean {
    let passed = false;
    const payLoadSubTypeId = +payLoad.subTypeId;
    const categoriesSubTypeId = productCategoriesModel.searchModel.subTypeId;
    const categoriesProductType = productCategoriesModel.searchModel.productType;

    if (payLoadSubTypeId) {
      if (categoriesSubTypeId === payLoadSubTypeId) {
        passed = true;
      }
    } else if (payLoad.productType) {
      if (payLoad.productType === categoriesProductType) {
        passed = true;
      }
    }
    return passed;
  }
}

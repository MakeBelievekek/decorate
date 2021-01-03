import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {ProductCategoryModalModel} from '../../models/ProductCategoryModalModel';
import {environment} from '../../../environments/environment';
import {catchError, filter, first, flatMap, map, pluck, shareReplay, take, tap} from 'rxjs/operators';
import {log} from 'util';
import {AttributeService} from '../attribute.service';
import {SearchModel} from '../../models/searchModel';
import {AttributeModel} from '../../models/attributeModel';
import {ProductAttributes} from '../../models/productAttributes';


@Injectable({
  providedIn: 'root'
})
export class CategoryStore {

  private filterCategories = new BehaviorSubject<Array<ProductCategoryModalModel>>([]);
  attributesByCategoryForFiltering$: Observable<Array<ProductCategoryModalModel>> = this.filterCategories.asObservable();
  private hasCategoriesLoaded = new BehaviorSubject<boolean>(false);
  hasCategoriesLoaded$ = this.hasCategoriesLoaded.asObservable();

  constructor(
    private attributeService: AttributeService) {
    this.loadAttributesByCategoryForFiltering().subscribe();
  }

  private loadAttributesByCategoryForFiltering(): Observable<Array<ProductCategoryModalModel>> {
    return this.attributeService.getAllAttributesForAllProductType().pipe(
      take(1),
      tap((categories) => {
        this.filterCategories.next(categories);
        this.hasCategoriesLoaded.next(true);
      })
    );
  }

  getAttributesForProductType(searchModel: SearchModel): Observable<ProductAttributes> {
    return this.attributesByCategoryForFiltering$.pipe(
      flatMap((categoriesList) => categoriesList),
      filter((categories) => this.getCategoriesForFilter(categories, searchModel)),
      pluck('productAttributes'),
    );
  }

  private getCategoriesForFilter(productCategoriesModel: ProductCategoryModalModel, payLoad: SearchModel): boolean {
    let passed = false;
    const payLoadSubTypeId = payLoad.subTypeId;
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

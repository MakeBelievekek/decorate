import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {combineLatest, Observable} from 'rxjs';
import {ProductModel} from '../../models/productModel';
import {take} from 'rxjs/operators';
import {CategoryStore} from '../stores/category-store';
import {ProductCategoryModalModel} from '../../models/ProductCategoryModalModel';
import {ProductListService} from '../product-list.service';
import {CategoryService} from '../category.service';
import {QueryParamService} from '../query-param.service';

@Injectable({
  providedIn: 'root',
})
export class ProductListResolver implements Resolve<Observable<[ProductCategoryModalModel, Array<ProductModel>]>> {

  constructor(
    private categoryStore: CategoryStore,
    private productListService: ProductListService,
    private categoryService: CategoryService,
    private queryParamService: QueryParamService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<[ProductCategoryModalModel, Array<ProductModel>]> {
    console.log('ittttttttttttttttttttttttttttttt ', route.queryParams);
    const payLoad = this.queryParamService.createPayLoad(route.queryParams);
    console.log('ittttttttttttttttttttttttttttttt ', payLoad);
    const products$ = this.productListService.getProductsByQueryParams(route.queryParams);
    let categoriesHasLoaded = false;

    this.categoryStore.hasCategoriesLoaded$.pipe(
      take(1),
    ).subscribe((isLoaded) => categoriesHasLoaded = isLoaded);

    let productsWhitCategories$;

    if (categoriesHasLoaded) {
      const categoryModel$: Observable<ProductCategoryModalModel> = this.categoryStore.getCategoriesForAttributeParams(payLoad);
      productsWhitCategories$ = combineLatest([categoryModel$, products$]);
    } else {
      const categoriesForFilter$ = this.categoryService.getCategoriesForFilterFromBackend(payLoad).pipe(
        take(1)
      );
      productsWhitCategories$ = combineLatest([categoriesForFilter$, products$]);
    }

    return productsWhitCategories$;
  }


}

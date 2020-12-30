import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ProductModel} from '../../models/productModel';
import {CategoryStore} from '../stores/category-store';
import {ProductListService} from '../product-list.service';
import {AttributeService} from '../attribute.service';
import {QueryParamService} from '../query-param.service';
import {AttributeModel} from '../../models/attributeModel';
import {SearchModel} from '../../models/searchModel';
import {ActiveFilterService} from '../active-filter.service';

@Injectable({
  providedIn: 'root',
})
export class ProductListResolver implements Resolve<Observable<any>> {

  constructor(
    private categoryStore: CategoryStore,
    private productListService: ProductListService,
    private attributeService: AttributeService,
    private queryParamService: QueryParamService,
    private activeFilterService: ActiveFilterService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const hasCategoriesLoaded$ = this.categoryStore.hasCategoriesLoaded$;
    const searchModel = this.queryParamService.createSearchModel(route.queryParams);
    const products$: Observable<Array<ProductModel>> = this.productListService.getProductsBySearchModel(searchModel);
    return products$;
  }

  private activateAttributesForSearchModel(productTypeAttributeList: Array<AttributeModel>, searchModel: SearchModel): void {
    const attributesGroupedByAttributeId = new Map();
    const {attributeIds} = searchModel;
    productTypeAttributeList.forEach(productAttribute => attributesGroupedByAttributeId.set(productAttribute.id, productAttribute));
    if (attributeIds) {
      attributeIds.forEach(searchAttributeId => {
        if (attributesGroupedByAttributeId.has(searchAttributeId)) {
          attributesGroupedByAttributeId.get(searchAttributeId).isActive = true;
        }
      });
    }
  }
}



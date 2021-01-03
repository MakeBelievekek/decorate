import {Injectable} from '@angular/core';
import {CategoryStore} from '../stores/category-store';
import {ActiveFilterService} from '../active-filter.service';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {QueryParamService} from '../query-param.service';
import {filter, flatMap, map, pluck, switchMap, take, takeWhile, tap, throttleTime} from 'rxjs/operators';
import {ProductCategoryModalModel} from '../../models/ProductCategoryModalModel';
import {SearchModel} from '../../models/searchModel';
import {ProductAttributes} from '../../models/productAttributes';
import {AttributeModel} from '../../models/attributeModel';

@Injectable({
  providedIn: 'root'
})
export class AttributeFilterResolver implements Resolve<any> {

  constructor(private categoryStore: CategoryStore,
              private activeFilterService: ActiveFilterService,
              private queryParamService: QueryParamService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const hasCategoriesLoaded$ = this.categoryStore.hasCategoriesLoaded$;
    const attributesByCategoryForFiltering$ = this.categoryStore.attributesByCategoryForFiltering$;
    const searchModel = this.queryParamService.createSearchModel(route.queryParams);
    console.log('megy a gözös', searchModel);

    hasCategoriesLoaded$.pipe(
      takeWhile(isLoaded => {
        console.log(isLoaded === false);
        return isLoaded === true;
      }),
      tap(x => {
        console.log(x);
      }),
      switchMap(() => attributesByCategoryForFiltering$),
      take(1),
      flatMap((productCategoryModalModelList) => productCategoryModalModelList),
      filter((productCategoryModalModel) => this.findProductAttributes(productCategoryModalModel, searchModel)),
      pluck('productAttributes'),
      map((productAttributes) => {
        const attributesStatus = this.setAttributesStatus(productAttributes, searchModel);
        // console.log(attributesStatus);
        return attributesStatus;
      }),
      tap((productAttributes) => {
        this.activeFilterService.addActiveProductAttributes(productAttributes);
      }),
    ).subscribe(value => {
      // console.log(value);
    });

    return undefined;
  }

  private setAttributesStatus(productAttributes: ProductAttributes, searchModel: SearchModel): ProductAttributes {
    let productAttributesWhitUpdatedStatus = this.createProductAttributesWhitUpdatedStatus(productAttributes, searchModel);
    // console.log(productAttributesWhitUpdatedStatus);
    return productAttributesWhitUpdatedStatus;
  }

  private createProductAttributesWhitUpdatedStatus(productAttributes: ProductAttributes, searchModel: SearchModel) {
    const productAttributesClone = {...productAttributes};
    for (const [attributeName, attributeList] of Object.entries(productAttributesClone)) {
      const clonedAttributes = attributeList.map(attribute => ({...attribute}));
      console.log(clonedAttributes);
      this.setAttributesToActive(clonedAttributes, searchModel);
      productAttributesClone[attributeName] = clonedAttributes;
    }
    return productAttributesClone;
  }

  private setAttributesToActive(attributeList: Array<AttributeModel>, searchModel: SearchModel) {
    const attributesGroupedByAttributeId = new Map();
    console.log(attributeList);
    this.groupAttributesById(attributeList, attributesGroupedByAttributeId);
    // console.log(attributesGroupedByAttributeId);
    // this.makeAttributesActive(searchModel, attributesGroupedByAttributeId);
    // console.log(attributesGroupedByAttributeId);

  }

  private makeAttributesActive(searchModel: SearchModel, attributesGroupedByAttributeId: Map<any, any>) {
    searchModel.attributeIds.forEach(attributeId => {
      if (attributesGroupedByAttributeId.has(attributeId)) {
        const attribute = attributesGroupedByAttributeId.get(attributeId);
        attribute.isActive = true;
        console.log('true');
      }
    });
  }

  private groupAttributesById(attributeList: Array<AttributeModel>, attributesGroupedByAttributeId: Map<any, any>) {
    attributeList.forEach(attribute => {
      const {id} = attribute;
      attributesGroupedByAttributeId.set(id, attribute);
    });
  }

  private findProductAttributes(productCategoryModalModel: ProductCategoryModalModel, searchModel: SearchModel): boolean {
    const {searchModel: {productType: modalProductType, subTypeId: modalSubTypId}} = productCategoryModalModel;
    const {productType: searchModelProductType, subTypeId: searchModelSubTypeId} = searchModel;
    const productTypeMatch = searchModelProductType === modalProductType;
    const subTypIdMatch = searchModelSubTypeId === modalSubTypId;

    if (searchModelSubTypeId && subTypIdMatch) {
      return true;
    } else if (searchModelProductType && productTypeMatch) {
      return true;
    }
  }
}

/*attributesByCategoryForFiltering$.pipe(
      takeWhile(value => value.length > 0),
      take(1),
      flatMap((productCategoryModalModelList) => productCategoryModalModelList),
      filter((productCategoryModalModel) => this.findProductAttributes(productCategoryModalModel, searchModel)),
      pluck('productAttributes'),
      tap(x => {
        console.log(x);
      }),
    );*/
/*hasCategoriesLoaded$.pipe(
      takeWhile((isLoaded) => isLoaded),
      tap(x => {
        console.log(x);
      }),
      take(1),
      switchMap((isLoaded) => attributesByCategoryForFiltering$),
      take(1),
      flatMap((productCategoryModalModelList) => productCategoryModalModelList),
      filter((productCategoryModalModel) => this.findProductAttributes(productCategoryModalModel, searchModel)),
      pluck('productAttributes'),
      tap(x => {
        console.log(x);
      }),
    );*/


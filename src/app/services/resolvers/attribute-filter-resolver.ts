import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { filter, flatMap, map, pluck, switchMap, take, tap } from 'rxjs/operators';
import { AttributeModel } from '../../models/attributeModel';
import { ProductAttributes } from '../../models/productAttributes';
import { ProductCategoryModalModel } from '../../models/ProductCategoryModalModel';
import { SearchModel } from '../../models/searchModel';
import { ActiveFilterService } from '../active-filter.service';
import { QueryParamService } from '../query-param.service';
import { CategoryStore } from '../stores/category-store';

@Injectable({
    providedIn: 'root',
})
export class AttributeFilterResolver implements Resolve<Observable<boolean>> {
    private productAttributesLoaded = new Subject<boolean>();
    productAttributesLoaded$: Observable<boolean> = this.productAttributesLoaded.asObservable();

    constructor(private categoryStore: CategoryStore,
                private activeFilterService: ActiveFilterService,
                private queryParamService: QueryParamService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        const hasCategoriesLoaded$ = this.categoryStore.hasCategoriesLoaded$;
        const attributesByCategoryForFiltering$ = this.categoryStore.attributesByCategoryForFiltering$;
        const searchModel = this.queryParamService.createSearchModel(route.queryParams);

        hasCategoriesLoaded$.pipe(
            filter((hasLoaded) => hasLoaded),
            switchMap(() => attributesByCategoryForFiltering$),
            take(1),
            flatMap((productCategoryModalModelList) => productCategoryModalModelList),
            filter((productCategoryModalModel) => this.findProductAttributes(productCategoryModalModel, searchModel)),
            pluck('productAttributes'),
            map((productAttributes) => this.setAttributesStatus(productAttributes, searchModel)),
            tap((productAttributes) => {
                this.activeFilterService.setActiveProductAttributes(productAttributes);
                this.productAttributesLoaded.next();
                this.productAttributesLoaded.complete();
            }),
        ).subscribe();

        return this.productAttributesLoaded$;
    }

    private setAttributesStatus(productAttributes: ProductAttributes, searchModel: SearchModel): ProductAttributes {
        return this.createProductAttributesWhitUpdatedStatus(productAttributes, searchModel);
    }

    private createProductAttributesWhitUpdatedStatus(productAttributes: ProductAttributes, searchModel: SearchModel) {
        const productAttributesClone = {...productAttributes};
        for (const [attributeName, attributeList] of Object.entries(productAttributesClone)) {
            const clonedAttributes = attributeList.map(attribute => ({...attribute}));

            this.setAttributesToActive(clonedAttributes, searchModel);

            productAttributesClone[attributeName] = clonedAttributes;
        }
        return productAttributesClone;
    }

    private setAttributesToActive(attributeList: Array<AttributeModel>, searchModel: SearchModel) {
        const attributesGroupedByAttributeId = new Map();
        this.groupAttributesById(attributeList, attributesGroupedByAttributeId);
        this.makeAttributesActive(searchModel, attributesGroupedByAttributeId);
    }

    private makeAttributesActive(searchModel: SearchModel, attributesGroupedByAttributeId: Map<any, any>) {
        searchModel.attributeIds.forEach(attributeId => {
            if (attributesGroupedByAttributeId.has(attributeId)) {
                const attribute = attributesGroupedByAttributeId.get(attributeId);
                attribute.isActive = true;
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

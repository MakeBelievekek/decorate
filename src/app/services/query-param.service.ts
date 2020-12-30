import {Injectable} from '@angular/core';
import {Params} from '@angular/router';
import {SearchModel} from '../models/searchModel';

@Injectable({
  providedIn: 'root'
})
export class QueryParamService {

  constructor() {
  }

  createSearchModel(queryParamsFromRoute: Params): SearchModel {
    const queryParams = queryParamsFromRoute;
    const blankSearchModel = new SearchModel();
    const {attributeIds} = queryParams;
    const payLoad = {...blankSearchModel, ...queryParams};

    if (payLoad.subTypeId) {
      payLoad.subTypeId = +payLoad.subTypeId;
    }

    this.setAttributeIdList(attributeIds, payLoad);

    return payLoad;
  }

  // noinspection JSMethodCanBeStatic
  private setAttributeIdList(attributeIds: any, payLoad: SearchModel): void {
    if (attributeIds) {
      const hasMultipleAttributeIds = Array.isArray(attributeIds);

      if (hasMultipleAttributeIds) {
        payLoad.attributeIds = attributeIds.map(attributeId => parseInt(attributeId, 10));
      } else {
        payLoad.attributeIds = [parseInt(attributeIds, 10)];
      }
    }
  }
}

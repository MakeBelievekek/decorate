import {Injectable} from '@angular/core';
import {Params} from '@angular/router';
import {SearchModel} from '../models/searchModel';

@Injectable({
  providedIn: 'root'
})
export class QueryParamService {

  constructor() {
  }

  createPayLoad(queryParamsFromRoute: Params): SearchModel {
    const queryParams = queryParamsFromRoute;
    const blankSearchModel = new SearchModel();
    const {attributeIds} = queryParams;

    const payLoad = {...blankSearchModel, ...queryParams};
    this.setAttributeIdList(attributeIds, payLoad);
    return payLoad;
  }

  // noinspection JSMethodCanBeStatic
  private setAttributeIdList(attributeIds: any, payLoad: SearchModel): void {
    if (attributeIds) {
      payLoad.attributeIds = [...attributeIds, ...[]];
    }
  }
}

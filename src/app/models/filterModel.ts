import {AttributeModel} from './attributeModel';

export interface FilterModel {
    productType: string;
    productDatabaseName: string;
    attrType: string;
    attr: string[];
}

export class FilterModel {
  productType: string;
  productDatabaseName: string;
  attrType: string;
  attr: Array<string> = [];
}

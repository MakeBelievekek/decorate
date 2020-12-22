export interface FilterModel {
    productType: string;
    productDatabaseName: string;
    attrType: string;
    attr: string[];
}

export class FilterModel {
  productType = '';
  productDatabaseName = '';
  attrType = '';
  attr = [''];
}

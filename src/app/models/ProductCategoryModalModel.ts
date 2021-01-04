import {SearchModel} from './searchModel';
import {ProductAttributes} from './productAttributes';

export interface ProductCategoryModalModel {
  productType: string;
  productDatabaseName: string;
  searchModel: SearchModel;
  isShown: boolean;
  color: boolean;
  pattern: boolean;
  style: boolean;
  productAttributes: ProductAttributes;
}

export class ProductCategoryModalModel {
  productType: string;
  productDatabaseName: string;
  searchModel = new SearchModel();
  isShown: boolean;
  color: boolean;
  pattern: boolean;
  style: boolean;
  productAttributes: ProductAttributes;
}


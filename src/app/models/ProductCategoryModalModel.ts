import {AttributeModel} from './attributeModel';
import {SearchModel} from './searchModel';

export interface ProductCategoryModalModel {
  productType: string;
  productDatabaseName: string;
  searchModel: SearchModel;
  isShown: boolean;
  color: boolean;
  pattern: boolean;
  style: boolean;
  colorList: AttributeModel[];
  patternList: AttributeModel[];
  styleList: AttributeModel[];
}

export class ProductCategoryModalModel {
  productType: string;
  productDatabaseName: string;
  searchModel = new SearchModel();
  isShown: boolean;
  color: boolean;
  pattern: boolean;
  style: boolean;
  colorList: Array<AttributeModel> = [];
  patternList: Array<AttributeModel> = [];
  styleList: Array<AttributeModel> = [];
}


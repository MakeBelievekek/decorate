import {AttributeModel} from './attributeModel';

export interface ProductAttributes {
  colorList: Array<AttributeModel>;
  styleList: Array<AttributeModel>;
  patternList: Array<AttributeModel>;
  compositionList: Array<AttributeModel>;
}

export class ProductAttributes {
  colorList: Array<AttributeModel>;
  styleList: Array<AttributeModel>;
  patternList: Array<AttributeModel>;
  compositionList: Array<AttributeModel>;
}

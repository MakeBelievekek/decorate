import { AttributeModel } from './attributeModel';

export interface ProductCategoryModalModel {
    productType: string;
    productDatabaseName: string;
    isShown: boolean;
    color: boolean
    pattern: boolean
    style: boolean
    colorList: AttributeModel[];
    patternList: AttributeModel[];
    styleList: AttributeModel[];
}

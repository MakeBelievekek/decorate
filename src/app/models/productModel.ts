import {AttributeListItemModel} from './attributeListItemModel';
import {ImageModel} from './imageModel';

export interface ProductModel {
  name: string;
  productType: string;
  productDesc: string;
  itemNumber: string;
  width: number;
  height: number;
  curtainType: string;
  patternRep: number;
  price: number;
  composition: string;
  productFamily: string;
  annotation: string;
  recommendedGlue: string;
  cleaningInst: string;
  imageList: ImageModel[];
  attributeCreationFormDataList: AttributeListItemModel[];
}

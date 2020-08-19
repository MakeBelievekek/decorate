import {AttributeListItemModel} from './attributeListItemModel';
import {ImageModel} from './imageModel';

export interface ProductModel {

  name: string;
  productType: string;
  productDesc: string;
  itemNumber: number;
  width: number;
  patternRep: number;
  price: number;
  composition: string;
  productFamily: string
  annotation: string;
  recommendedGlue: string;
  imageList: ImageModel[];
  attributeListItemData: AttributeListItemModel[]

}

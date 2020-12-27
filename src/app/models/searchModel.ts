export interface SearchModel {
  productType: string;
  subType: string;
  subTypeId: number;
  attributeIds: Array<number>;
}

export class SearchModel {
  productType: string;
  subType: string;
  subTypeId: number;
  attributeIds: Array<number> = [];
}

export interface AttributeModel {
  id: number;
  type: string;
  description: string;
  isActive: boolean;
}


export class AttributeModel {
  id = NaN;
  type = '';
  description = '';
  isActive = false;
}

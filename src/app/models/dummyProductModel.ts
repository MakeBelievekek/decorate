import {ImageModel} from './imageModel';
import {AttributeListItemModel} from './attributeListItemModel';

export interface DummyProductModel {
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
  attributeListItemData: AttributeListItemModel[];
  color: string;


}

export class DummyProductModel {
  name = 'Valódi Sötétitő Függyöny';
  productType = 'fügöny';
  productDesc = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aspernatur beatae blanditiis distinctio laborum mollitia officia quisquam recusandae reprehenderit? Beatae dicta dignissimos maiores maxime molestiae officia quibusdam quis quod reiciendis.';
  itemNumber = '111';
  width = 10;
  height = 20;
  curtainType = 'sötétítő';
  patternRep = 15;
  price = 2000;
  composition = 'vastag';
  productFamily = 'Fügöny';
  annotation = 'gazdag';
  recommendedGlue = 'csempe ragasztó';
  cleaningInst = 'gőz';
  imageList = [ {imageType: 'main', imgUrl: 'https://i.imgur.com/1nyTupT.jpg'},
                {imageType: 'secondary', imgUrl: 'https://i.imgur.com/BPzc9JK.jpg?1'},
                {imageType: 'secondary', imgUrl: 'https://i.imgur.com/wjoNXAQ.jpg'}];
  attributeListItemData = [{id: 110}];
  color = 'Piros';
}

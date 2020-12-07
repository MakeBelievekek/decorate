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
  name = 'Japan Black';
  productType = 'fügöny';
  productDesc = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aspernatur beatae blanditiis distinctio laborum mollitia officia quisquam recusandae reprehenderit? Beatae dicta dignissimos maiores maxime molestiae officia quibusdam quis quod reiciendis.';
  itemNumber = '105984';
  width = 52 ;
  height = 20;
  curtainType = 'sötétítő';
  patternRep = 64;
  price = 11700 ;
  composition = 'vastag';
  productFamily = 'Fügöny';
  annotation = ' Vlies alap, Falat kenni a ragasztóval';
  recommendedGlue = 'csempe ragasztó';
  cleaningInst = 'gőz';
  imageList = [ {imageType: 'main', imgUrl: 'https://i.imgur.com/Vcfn5DW.jpg'},
                {imageType: 'secondary', imgUrl: 'https://i.imgur.com/CjhCxAf.jpg'},
                {imageType: 'secondary', imgUrl: 'https://i.imgur.com/wUlw1vQ.jpg'}];
  attributeListItemData = [{id: 110}];
  color = 'Piros';
}

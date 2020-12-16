import { ImageModel } from './imageModel';

export interface ProductListItemForLocal {
    id: number;
    price: number;
    typeOfProduct: string;
    typeOfSize: string;
    qty: number;
    itemNumber: string;
    productDesc: string;
    image: string;
    images: ImageModel[];
    name: string;
}

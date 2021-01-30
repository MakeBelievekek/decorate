import { BillingModel } from './billingModel';
import { ProductListItemForLocal } from './productListItemForLocal';
import { ShippingModel } from './shippingModel';
import { UserModel } from './userModel';

export interface CallBackDto {

    productList: ProductListItemForLocal[];
    user: UserModel;
    shipping: ShippingModel;
    billing: BillingModel;
    paymentOption: string;
    orderNumber: string;
    paymentStatus: string



}

export class CallBackDto {
    user: UserModel;
    shipping: ShippingModel;
    billing: BillingModel;
    orderNumber: string;
    paymentStatus: string;
    paymentOption: string;
    productList: ProductListItemForLocal[] = [];
}

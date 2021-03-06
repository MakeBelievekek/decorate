import { BillingModel } from './billingModel';
import { ProductListItemForLocal } from './productListItemForLocal';
import { ShippingModel } from './shippingModel';
import { UserModel } from './userModel';

export interface OrderSubjectDto {

    productList: ProductListItemForLocal[];
    user: UserModel;
    shipping: ShippingModel;
    billing: BillingModel;
    paymentOption: string;
    orderNumber: string;
    totalPrice: number;
    openModal: boolean;
}

export class OrderSubjectDto {
    productList: ProductListItemForLocal[] = [];
    user: UserModel;
    shipping: ShippingModel;
    billing: BillingModel;
    paymentOption: string;
    orderNumber: string;
    totalPrice: number;
    openModal: boolean = false;
}

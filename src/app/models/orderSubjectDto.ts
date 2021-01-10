import { BillingModel } from './billingModel';
import { ProductListItemForLocal } from './productListItemForLocal';
import { ShippingModel } from './shippingModel';
import { UserModel } from './userModel';

export interface OrderSubjectDto {
    products: ProductListItemForLocal[];
    user: UserModel;
    shipping: ShippingModel;
    billing: BillingModel;
    paymentOption: string;
    orderId: string;
    totalPrice: number;
}

export class OrderSubjectDto {
    products: ProductListItemForLocal[] = [];
    user: UserModel;
    shipping: ShippingModel;
    billing: BillingModel;
    paymentOption: string;
    orderId: string;
    totalPrice: number;
}

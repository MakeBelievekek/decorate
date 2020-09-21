import { BillingModel } from './billingModel';
import { LocalProductModel } from './localProductModel';
import { ShippingModel } from './shippingModel';
import { UserModel } from './userModel';

export interface OrderModel {
    itemId: LocalProductModel[];
    user: UserModel;
    shipping: ShippingModel;
    billing: BillingModel;
    paymentOption: string;
}

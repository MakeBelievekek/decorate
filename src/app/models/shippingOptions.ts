import { PaymentOptionDto } from './paymentOptionDto';

export interface ShippingOptions {
    name: string;
    typeOfDelivery: string;
    price: number;
    paymentOptions: PaymentOptionDto[];
}

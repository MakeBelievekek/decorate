import {ResponseTransaction} from './responseTransaction';

export interface PaymentResponseModel {
  paymentId: string;
  paymentRequestId: string;
  status: string;
  qrurl: string;
  recurrenceResult: string;
  gatewayUrl: string;
  redirectUrl: string;
  callbackUrl: string;
  transactions: ResponseTransaction[];
  errors: string[];
}

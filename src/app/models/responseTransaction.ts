import { TransactionsModel } from './transactionsModel';

export interface ResponseTransaction {
    PaymentId: string;
    PaymentRequestId: string;
    Status: string;
    QRUrl: string;
    RecurrenceResult: string;
    Transactions: TransactionsModel[];
    GatewayUrl: string;
    RedirectUrl: string;
    CallbackUrl: string;
    Errors: string[];
}

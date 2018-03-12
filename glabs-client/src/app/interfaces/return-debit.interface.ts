export interface PaymentInfo {
    ref: String;
    transCode: String;
    returnCode: String;
    returnDescription: String;
    originalProcessingDate: String;
    valueOf: String;
    currency: String;
}

export interface PayerAccount {
    ref: String;
    number: String;
    name: String;
    sortCode: String;
    bankName: String;
    branchName: String;
}

export interface ReturnDebit {
    _id: String;
    paymentInfo: PaymentInfo;
    paymentAccount: PayerAccount;
}

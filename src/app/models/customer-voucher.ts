
export class CustomerVoucher {
    customerVoucherId: number | undefined;
    redeemed: boolean | undefined;
    timeOfCreation: Date | undefined;
    title: string | undefined;
    expiryDate: Date | undefined;
    amountRedeemable: number | undefined;
    price: number | undefined;
    validity: boolean | undefined;
    content: string | undefined;
    sixDigitCode: string | undefined;


    constructor(customerVoucherId?: number, title?: string, expiryDate?: Date, amountRedeemable?: number, price?: number, 
        validity?: boolean, content?: string, redeemed?: boolean, timeOfCreation?: Date, sixDigitCode?: string)
    {
        this.customerVoucherId = customerVoucherId;
        this.title = title;
        this.expiryDate = expiryDate;
        this.amountRedeemable = amountRedeemable;
        this.price = price;
        this.validity = validity;
        this.content = content;
        this.redeemed = redeemed;
        this.timeOfCreation = timeOfCreation;
        this.sixDigitCode = sixDigitCode;
    }

}
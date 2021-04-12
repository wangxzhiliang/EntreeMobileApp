
export class Voucher {
    voucherId: number | undefined;
    title: string | undefined;
    expiryDate: Date | undefined;
    amountRedeemable: number | undefined;
    price: number | undefined;
    validity: boolean | undefined;
    content: string | undefined;


    constructor(voucherId?: number, title?: string, expiryDate?: Date, amountRedeemable?: number, price?: number, 
        validity?: boolean, content?: string)
    {
        this.voucherId = voucherId;
        this.title = title;
        this.expiryDate = expiryDate;
        this.amountRedeemable = amountRedeemable;
        this.price = price;
        this.validity = validity;
        this.content = content;
    }

}

export class CreditCard
{
	creditCardId: number | undefined;
    cardNumber: string | undefined;
    cvv: string | undefined;
    expiryDate: Date | undefined;
    nameOnCard: string | undefined;
    deleted: boolean | undefined;
    
    // owner: Customer | undefined;

    constructor(creditCardId?: number, cardNumber?: string, cvv?: string, 
        expiryDate?:Date, nameOnCard?: string, deleted?: boolean)
    {
        this.creditCardId = creditCardId;
        this.cardNumber = cardNumber;
        this.cvv = cvv;
        this.expiryDate = expiryDate;
        this.nameOnCard = nameOnCard;
        this.deleted = deleted;
        // this.owner = owner;
    }
}

// import { Customer } from './customer';

export class CreditCard {

    creditCardId: number | undefined;
    cardNumber: string | undefined;
    cvv: string | undefined;
    expiryDate: Date | undefined;
    nameOnCard: string | undefined;
    
    // owner: Customer | undefined;

    constructor(creditCardId?: number, cardNumber?: string, cvv?: string, expiryDate?:Date, nameOnCard?: string)
    {
        this.creditCardId = creditCardId;
        this.cardNumber = cardNumber;
        this.cvv = cvv;
        this.expiryDate = expiryDate;
        this.nameOnCard = nameOnCard;
        // this.owner = owner;
    }

}

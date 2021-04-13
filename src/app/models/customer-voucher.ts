
import {Voucher} from './voucher';

export class CustomerVoucher {
    customerVoucherId: number | undefined;
    redeemed: boolean | undefined;
    timeOfCreation: Date | undefined;
    sixDigitCode: string | undefined;
    voucher: Voucher | undefined;


    constructor(customerVoucherId?: number,redeemed?: boolean, timeOfCreation?: Date, sixDigitCode?: string, voucher?: Voucher)
    {
        this.customerVoucherId = customerVoucherId;
        this.redeemed = redeemed;
        this.timeOfCreation = timeOfCreation;
        this.sixDigitCode = sixDigitCode;
        this.voucher = voucher;
    }

}
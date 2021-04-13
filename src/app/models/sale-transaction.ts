import { Customer } from "./customer";
import {Restaurant} from "./restaurant";

export class SaleTransaction {
    
    transactionId: number | undefined;
    paidAmount: number | undefined;
    transactionDate: Date | undefined;
    customer: Customer | undefined;
    restaurant: Restaurant | undefined;

    constructor(transactionId?: number, paidAmount?: number, transactionDate?: Date, customer?: Customer,
        restaurant?: Restaurant) {
        this.transactionId = transactionId;
        this.paidAmount = paidAmount;
        this.transactionDate = transactionDate;
        this.customer = customer;
        this.restaurant = restaurant;
    }
}

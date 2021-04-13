import { TableSize } from "./table-size.enum";
import { Restaurant} from './restaurant';
import { Customer } from "./customer";

export class Reservation {

    reservationDate: Date | undefined;
    reservationTime: number | undefined;
    numOfPax: number | undefined;
    // tableSizeAssigned: TableSize | undefined;
    tableSizeAssigned: string | undefined;
    remark: string | null;
    restaurant: Restaurant | undefined;
    customer: Customer | undefined;

    // constructor(reservationDate?: Date, reservationTime?: number, numOfPax?: number,
    //     tableSizeAssigned?: TableSize, remark?: string, restaurant?: Restaurant, customer?: Customer) {
    //     this.reservationDate = reservationDate;
    //     this.reservationTime = reservationTime;
    //     this.numOfPax = numOfPax;
    //     this.tableSizeAssigned = tableSizeAssigned;
    //     this.remark = remark;
    //     this.restaurant = restaurant;
    //     this.customer = customer;
    // }

    constructor(reservationDate?: Date, reservationTime?: number, numOfPax?: number,
        tableSizeAssigned?: string, remark?: string, restaurant?: Restaurant, customer?: Customer) {
        this.reservationDate = reservationDate;
        this.reservationTime = reservationTime;
        this.numOfPax = numOfPax;
        this.tableSizeAssigned = tableSizeAssigned;
        this.remark = remark;
        this.restaurant = restaurant;
        this.customer = customer;
    }
}

import { TableSize } from "./table-size.enum";
import { Restaurant} from './restaurant';

export class Reservation {

    reservationDate: Date | undefined;
    reservationTime: number | undefined;
    numOfPax: number | undefined;
    tableSizeAssigned: TableSize | undefined;
    remark: string | null;
    restaurant: Restaurant | undefined;

    constructor(reservationDate?: Date, reservationTime?: number, numOfPax?: number,
        tableSizeAssigned?: TableSize, remark?: string, restaurant?: Restaurant) {
        this.reservationDate = reservationDate;
        this.reservationTime = reservationTime;
        this.numOfPax = numOfPax;
        this.tableSizeAssigned = tableSizeAssigned;
        this.remark = remark;
        this.restaurant = restaurant;
    }
}

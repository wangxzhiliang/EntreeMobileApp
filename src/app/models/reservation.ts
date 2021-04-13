import { TableSize } from "./table-size.enum";

export class Reservation {

    reservationDate: Date | undefined;
    reservationTime: number | undefined;
    numOfPax: number | undefined;
    tableSizeAssigned: TableSize | undefined;
    remark: string | null;

    constructor(reservationDate?: Date, reservationTime?: number, numOfPax?: number,
        tableSizeAssigned?: TableSize, remark?: string) {
        this.reservationDate = reservationDate;
        this.reservationTime = reservationTime;
        this.numOfPax = numOfPax;
        this.tableSizeAssigned = tableSizeAssigned;
        this.remark = remark;
    }
}

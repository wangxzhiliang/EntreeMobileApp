export class GetAvailableTablesReq {

    restaurantId: number | undefined;
    time: number | undefined;

    constructor(restaurantId?: number, time?: number) {
        this.restaurantId = restaurantId;
        this.time = time;
    }
}

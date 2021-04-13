import { Reservation } from "./reservation";

export class CreateReservationReq {
    reservation: Reservation | undefined;
    customerId: number | undefined;
    restaurantId: number | undefined;

    constructor(reservation?: Reservation, customerId?: number | null, restaurantId?: number)
	{		
        this.reservation = reservation;
        this.customerId = customerId;
        this.restaurantId = restaurantId;
	}
}

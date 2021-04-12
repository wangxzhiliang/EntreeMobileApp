import { CustomerVoucher } from "./customer-voucher";
import { Dish } from "./dish";
import { Promotion } from "./promotion";
import { Review } from "./review";
import { TableConfiguration } from "./table-configuration";

export class Restaurant {

    userId: number | undefined;
    name: string | undefined; 
    address: string | undefined;
    postalCode: string | undefined;
    contactNumber: string | undefined;
    photos: string[] | undefined;
    acceptReservation: boolean | undefined;
    openTime: number | undefined;
    closeTime: number | undefined;
    description: string | undefined;
    tableConfiguration: TableConfiguration | undefined;
    dishes: Dish[] | null;
    promotions: Promotion[] | undefined;
    reviews: Review[] | undefined;
    customerVouchers: CustomerVoucher[] | undefined;
    
    constructor(userId?: number, name?: string, address?: string, postalCode?: string, 
        contactNumber?: string, photos?: string[], acceptReservation?: boolean, openTime?: number,
        closeTime?: number, description?: string, tableConfiguration?: TableConfiguration, 
        dishes?: Dish[], promotions?: Promotion[], reviews?: Review[], customerVouchers?: CustomerVoucher[])
	{
		this.userId = userId;
        this.name = name; 
        this.address = address;
        this.postalCode = postalCode;
        this.contactNumber = contactNumber;
        this.photos = photos;
        this.acceptReservation = acceptReservation;
        this.openTime = openTime;
        this.closeTime = closeTime;
        this.description = description;
        this.dishes = dishes;
        this.promotions = promotions;
        this.reviews = reviews;
        this.customerVouchers = customerVouchers;
    }
}

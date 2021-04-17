import { Customer } from "./customer";
import {Restaurant} from "./restaurant";

export class Review {
    reviewId: number | undefined;
    content: string | undefined;
    rating: number | undefined;
    photos: string[] | undefined;
    timeOfCreation: Date | undefined;
    creater: Customer | undefined;
    receiver: Restaurant | undefined;
    customerLikes: Customer[] | undefined;
    hasLiked: boolean | undefined;

    constructor(reviewId?: number, content?: string, rating?: number, photos?: string[],
        timeOfCreation?: Date, creater?: Customer, receiver?: Restaurant, customerLikes?: Customer[]) {
        this.reviewId = reviewId;
        this.content = content;
        this.rating = rating;
        this.photos = photos;
        this.customerLikes = customerLikes;
        this.timeOfCreation = timeOfCreation;
        this.creater = creater;
        this.receiver = receiver;
        this.hasLiked = false;
    }
}

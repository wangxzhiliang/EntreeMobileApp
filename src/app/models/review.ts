import { Customer } from "./customer";
import {Restaurant} from "./restaurant";

export class Review {
    reviewId: number | undefined;
    content: string | undefined;
    rating: number | undefined;
    photos: string[] | undefined;
    numOfLikes: number | undefined;
    numOfDislikes: number | undefined;
    timeOfCreation: Date | undefined;
    creater: Customer | undefined;
    restaurant: Restaurant | undefined;

    constructor(reviewId?: number, content?: string, rating?: number, photos?: string[],
        numOfLikes?: number, numOfDislikes?: number, timeOfCreation?: Date, creater?: Customer, restaurant?: Restaurant) {
        this.reviewId = reviewId;
        this.content = content;
        this.rating = rating;
        this.photos = photos;
        this.numOfLikes = numOfLikes;
        this.numOfDislikes = numOfDislikes;
        this.timeOfCreation = timeOfCreation;
        this.creater = creater;
        this.restaurant = restaurant;
    }
}

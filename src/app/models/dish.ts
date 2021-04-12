export class Dish {
    dishId: number | undefined;
    name: string | undefined;
    description: string | undefined;
    photo: string | undefined;
    price: number | undefined;
    recommended: boolean | undefined;

    constructor(dishId?: number, name?: string, description?: string, photo?: string,
        price?: number, recommended?: boolean) {
        this.dishId = dishId;
        this.name = name;
        this.description = description;
        this.photo = photo;
        this.price = price;
        this.recommended = recommended;
    }
}

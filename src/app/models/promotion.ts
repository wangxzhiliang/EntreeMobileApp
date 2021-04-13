export class Promotion {
    promotionId: number | undefined;
    content: string | undefined;
    title: string | undefined;
    photo: string | undefined;
    startDate: Date | undefined;
    endDate: Date | undefined;

    constructor(promotionId?: number, content?: string, title?: string, photo?: string,
        startDate?: Date, endDate?: Date) {
        this.promotionId = promotionId;
        this.content = content;
        this.title = title;
        this.photo = photo;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}

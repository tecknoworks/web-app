export class AverageRating {
    // screenplayId: string;
    average: number;
    total: number;
}

export class Rating{
    id: string;
    screenplayId: string;
    userId: string;
    rating: number;
    createdAt: Date;
}

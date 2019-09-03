import { Component, Input } from '@angular/core';
import { RatingService } from 'src/app/_services/rating.service';
import { AverageRating, Rating } from 'src/app/_models/rating';

@Component({
  selector: 'rating',
  templateUrl: './rating.component.html'
})
export class RatingComponent {
    @Input() screenplayId: string;
    currentRate = null;
    average = null;
    total = null;

    constructor(private ratingService: RatingService) {}

    ngOnInit() {
        this.ratingService.getAverageRating(this.screenplayId).then((rating: AverageRating)=> {
            this.average = rating.average;
            this.total = rating.total;
            this.currentRate=rating.average;
        });
        this.ratingService.getRating(this.screenplayId).then((rating: Rating)=> {
            if(rating!=null)
                this.currentRate=rating.rating;
        });
    }

    onRateChange() {
        
        console.log('New Rating', this.currentRate);
    }
}
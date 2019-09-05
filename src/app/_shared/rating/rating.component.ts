import { Component, Input } from '@angular/core';
import { RatingService } from 'src/app/_services/rating.service';
import { AverageRating, Rating } from 'src/app/_models/rating';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent {
    @Input() screenplayId: string;
    @Input() isAuth: boolean;
    
    isPreviousAuth = false;
    currentRate = 0;
    average = 0;
    total = 0;
    max = 10;

    constructor(private ratingService: RatingService) {}

    ngOnInit() {
        this.isPreviousAuth = this.isAuth;
        this.getAverage();

        if(this.isAuth)
            this.getRating();
    }

    ngOnChanges(){
        if(!this.isPreviousAuth && this.isAuth)
            this.getRating();

        if(this.isPreviousAuth && !this.isAuth)
            this.currentRate = 0;
        
        this.isPreviousAuth = this.isAuth;
    }

    getAverage() {
        this.ratingService.getAverageRating(this.screenplayId).then((rating: AverageRating)=> {
            this.average = rating.average;
            this.total = rating.total;
        });
    }

    getRating()
    {
        this.ratingService.getRating(this.screenplayId).then((rating: Rating)=> {
            if(rating != null)
                this.currentRate = rating.rating;
            else
                this.currentRate = 0;
        });
    }

    updateClientRatings()
    {
        try {
            this.ratingService.insertRating(this.screenplayId, this.currentRate).then((rating: Rating) => {  
                this.getAverage();
            });
        }
        catch(error)
        {
            this.currentRate = 0;
        }
    }
}
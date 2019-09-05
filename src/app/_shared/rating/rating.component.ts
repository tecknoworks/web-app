import { Component, Input } from '@angular/core';
import { RatingService } from 'src/app/_services/rating.service';
import { AverageRating, Rating } from 'src/app/_models/rating';

@Component({
  selector: 'rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent {
    @Input() screenplayId: string;
    currentRate = 0;
    average = 0;
    total = 0;
    max=10;
    name="rating";
    view=false;

    constructor(private ratingService: RatingService) {}

    ngOnInit() {
        this.getAverage();
        this.getRating();
    }

    getAverage(){
        this.ratingService.getAverageRating(this.screenplayId).then((rating: AverageRating)=> {
            if(rating.average!=null)
                this.average = rating.average;
            this.total = rating.total;
        });
    }

    getRating()
    {
        this.ratingService.getRating(this.screenplayId).then((rating: Rating)=> {
            if(rating!=null)
                {
                    this.currentRate=rating.rating;
                    this.view=true;
                }
            else
               { 
                   this.currentRate=0;
                    this.view=false;
               }
        });
    }

    updateClientRatings(name:string,rate:number)
    {
        try{
            this.ratingService.insertRating(this.screenplayId,this.currentRate).then((rating: Rating) => {  
                this.getAverage();
        });
    }
    catch(error)
        {
            this.currentRate=0;
        }

    }
}
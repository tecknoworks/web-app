import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/_models/movie';
import { Router } from '@angular/router';
import { AssetService } from 'src/app/_services/asset.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() movie: Movie
  private _timeViewed: number
  private _imageUrl: string
  private _timeString: string

  constructor(private assetService: AssetService) { }

  ngOnInit() {
    this.initImageUrl()
    this.initTimeString()
    this.initTimeViewed()
  }

  public get timeViewed(): number{
    return this._timeViewed
  }

  public get timeString():string{
    return this._timeString
  }

  public get imageUrl():string{
    return this._imageUrl
  }

  public initTimeString():void{
    var hours   = Math.floor(this.movie.runtime / 3600);
    var minutes = Math.floor((this.movie.runtime - (hours * 3600)) / 60);
    var seconds = this.movie.runtime - (hours * 3600) - (minutes * 60);

    this._timeString=`${hours}:${minutes}:${seconds}`;
  }

  public initImageUrl():void{
    this._imageUrl = this.assetService.imageUrl(this.movie.poster);
  }

  public initTimeViewed():void{
    if(this.movie.historyRecord!=null){
      this._timeViewed =  (this.movie.historyRecord.time/this.movie.historyRecord.videoDuration)*100    
    }
  }
}

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

  constructor(private assetService: AssetService) { }

  ngOnInit() {
  }

  public get getTimeString():string{
    var hours   = Math.floor(this.movie.runtime / 3600);
    var minutes = Math.floor((this.movie.runtime - (hours * 3600)) / 60);
    var seconds = this.movie.runtime - (hours * 3600) - (minutes * 60);

    return `${hours}:${minutes}:${seconds}`;
  }

  public get imageUrl():string{
    return this.assetService.imageUrl(this.movie.poster);
  }
}

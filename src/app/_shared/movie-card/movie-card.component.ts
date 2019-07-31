import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/_models/movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() movie: Movie

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public get getTimeString():string{
    var hour=Math.floor(this.movie.videoDuration/60);
    var min=this.movie.videoDuration%60;
    return `${hour}:${min}`;
  }
}

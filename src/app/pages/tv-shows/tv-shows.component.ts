import { Component, OnInit } from '@angular/core';
import { TvShowService } from 'src/app/_services/tv-show.service';
import { GenreService } from 'src/app/_services/genre.service';
import { TvShow } from 'src/app/_models/tv-show';
import { Genre } from 'src/app/_models/genre';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.scss']
})
export class TvShowsComponent implements OnInit {
  constructor(
    public tvShowsService: TvShowService,
    public genreService: GenreService) { 
   }

  ngOnInit() {
    this.tvShowsService.initTvShowsByGenre()
  }

  getTvShowsForGenre(genre:Genre):Array<TvShow>{
    return this.tvShowsService.tvShowsByGenre[genre.id];
  }

  public get genres():Array<Genre>{
    return this.genreService.genres;
  }
}

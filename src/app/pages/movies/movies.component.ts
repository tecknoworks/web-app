import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../_services/movie.service';
import { GenreService } from '../../_services/genre.service';
import { Genre } from '../../_models/genre';
import { Movie } from '../../_models/movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  constructor(
    private _movieService: MovieService,
    private _genreService: GenreService,
    ) {
     }

  ngOnInit() {
  }

  getMoviesForGenre(genre:Genre):Array<Movie>{
    return this._movieService.moviesByGenre.get(genre.id);
  }

  public get genres():Array<Genre>{
    return this._genreService.genres;
  }
}

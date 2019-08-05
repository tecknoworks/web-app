import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../_services/movie.service';
import { GenreService } from '../../_services/genre.service';
import { Genre } from '../../_models/genre';
import { Movie } from '../../_models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  constructor(
    public movieService: MovieService,
    public genreService: GenreService
    ) { }

  ngOnInit() {
  }

  getMoviesForGenre(genre:Genre):Array<Movie>{
    return this.movieService.moviesByGenre.get(genre.id);
  }

  public get genres():Array<Genre>{
    return this.genreService.genres;
  }
}

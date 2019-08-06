import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/_models/movie';
import { MovieService } from 'src/app/_services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from 'src/app/_services/video.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  movieId: string
  public movie:Movie

  constructor(
    private _movieService: MovieService,
    private _activatedRoute: ActivatedRoute,
    private _videoService: VideoService
  ) { }

  ngOnInit() {
    this.movieId = this._activatedRoute.snapshot.params['movie-id'];
    this.movie=this._movieService.getMovieById(this.movieId)
  }

  public get videoUrl():string{
    return this._videoService.videoUrl('long');
  }

}

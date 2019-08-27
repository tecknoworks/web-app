import { Injectable } from '@angular/core';
import { Movie } from '../_models/movie';
import { Actor } from '../_models/actor';
import { Genre } from '../_models/genre';
import { ContentRating } from '../_models/content-rating';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private _movies: Movie[] = new Array();
  private _moviesByGenre: Map<string, Movie[]> = new Map()

  constructor(private _http: HttpClient, private _authService: AuthService) {
    this.initMovies()
  }

  public get movies():Movie[]{
    return this._movies;
  }

  public get moviesByGenre():Map<string, Movie[]>{
    return this._moviesByGenre;
  }

  public async initMovies(){ 
    this._movies= await this._http.get<Movie[]>(`${environment.gatewayApi}/movies/all`).toPromise();
    
    this.initMoviesByGenre()
    
  }

  public initMoviesByGenre(){
    this._moviesByGenre=new Map()
    this._movies.forEach((value)=>{
      if(Array.from(this._moviesByGenre.keys()).includes(value.genre.id)){
        this._moviesByGenre.get(value.genre.id).push(value)
      }else{
        this._moviesByGenre.set(value.genre.id,[value])
      }
    })
  }

  public async getMovieById(movieId:string):Promise<Movie>{
    var result = await this._http.get<Movie>(`${environment.gatewayApi}/movies/${movieId}`).toPromise()
    return result
  }

}

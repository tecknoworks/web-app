import { Injectable } from '@angular/core';
import { Movie } from '../_models/movie';
import { Actor } from '../_models/actor';
import { Genre } from '../_models/genre';
import { ContentRating } from '../_models/content-rating';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private _movies: Movie[] = new Array();
  private _moviesByGenre: Map<string, Movie[]> = new Map()

  constructor(private _http: HttpClient) {
    this.initMovies()
  }

  public get movies():Movie[]{
    return this._movies;
  }

  public get moviesByGenre():Map<string, Movie[]>{
    return this._moviesByGenre;
  }

  public async initMovies(){
    this._movies= await this._http.get<Movie[]>("http://localhost:8080/movies/all").toPromise();
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

  public getMovieById(movieId:string):Movie{
    var result:Movie
    this._movies.forEach((value)=>{  
      if(value.id==movieId){
        result= value;
      }
    })
    return result
  }

}

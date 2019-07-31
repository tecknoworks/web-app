import { Injectable } from '@angular/core';
import { Movie } from '../_models/movie';
import { Actor } from '../_models/actor';
import { Genre } from '../_models/genre';
import { ContentRating } from '../_models/content-rating';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  public movies: Array<Movie> = new Array();
  public moviesByGenre: Map<string, Array<Movie>> = new Map()
  constructor() {
    this.movies = [
      new Movie('1', "Fast and furious 1", new Actor('1', "John Lin"), "Awesome and exciting.", new Date("7/7/2017"), new Genre('1', "Action"), new ContentRating('1', "PG-16"), 7.8, [new Actor('1', "Jason Statham")], "assets/images/mv1.jpg", 1234),
      new Movie('1', "Fast and furious 2", new Actor('1', "John Lin"), "Awesome and exciting.", new Date("7/7/2017"), new Genre('1', "Action"), new ContentRating('1', "PG-16"), 7.8, [new Actor('1', "Jason Statham")], "assets/images/mv2.jpg", 1234),
      new Movie('1', "Fast and furious 3", new Actor('1', "John Lin"), "Awesome and exciting.", new Date("7/7/2017"), new Genre('1', "Action"), new ContentRating('1', "PG-16"), 7.8, [new Actor('1', "Jason Statham")], "assets/images/mv3.jpg", 1234),
      new Movie('1', "Fast and furious 4", new Actor('1', "John Lin"), "Awesome and exciting.", new Date("7/7/2017"), new Genre('1', "Action"), new ContentRating('1', "PG-16"), 7.8, [new Actor('1', "Jason Statham")], "assets/images/mv4.jpg", 1234),
      new Movie('1', "Fast and furious 1", new Actor('1', "John Lin"), "Awesome and exciting.", new Date("7/7/2017"), new Genre('4', "Comedy"), new ContentRating('1', "PG-16"), 7.8, [new Actor('1', "Jason Statham")], "assets/images/mv1.jpg", 1234),
      new Movie('1', "Fast and furious 2", new Actor('1', "John Lin"), "Awesome and exciting.", new Date("7/7/2017"), new Genre('4', "Comedy"), new ContentRating('1', "PG-16"), 7.8, [new Actor('1', "Jason Statham")], "assets/images/mv2.jpg", 1234),
      new Movie('1', "Fast and furious 3", new Actor('1', "John Lin"), "Awesome and exciting.", new Date("7/7/2017"), new Genre('4', "Comedy"), new ContentRating('1', "PG-16"), 7.8, [new Actor('1', "Jason Statham")], "assets/images/mv3.jpg", 1234),
      new Movie('1', "Fast and furious 4", new Actor('1', "John Lin"), "Awesome and exciting.", new Date("7/7/2017"), new Genre('4', "Comedy"), new ContentRating('1', "PG-16"), 7.8, [new Actor('1', "Jason Statham")], "assets/images/mv4.jpg", 1234),
      new Movie('1', "Fast and furious 1", new Actor('1', "John Lin"), "Awesome and exciting.", new Date("7/7/2017"), new Genre('3', "Thriller"), new ContentRating('1', "PG-16"), 7.8, [new Actor('1', "Jason Statham")], "assets/images/mv1.jpg", 1234),
      new Movie('1', "Fast and furious 2", new Actor('1', "John Lin"), "Awesome and exciting.", new Date("7/7/2017"), new Genre('3', "Thriller"), new ContentRating('1', "PG-16"), 7.8, [new Actor('1', "Jason Statham")], "assets/images/mv2.jpg", 1234),
      new Movie('1', "Fast and furious 3", new Actor('1', "John Lin"), "Awesome and exciting.", new Date("7/7/2017"), new Genre('3', "Thriller"), new ContentRating('1', "PG-16"), 7.8, [new Actor('1', "Jason Statham")], "assets/images/mv3.jpg", 1234),
      new Movie('1', "Fast and furious 4", new Actor('1', "John Lin"), "Awesome and exciting.", new Date("7/7/2017"), new Genre('3', "Thriller"), new ContentRating('1', "PG-16"), 7.8, [new Actor('1', "Jason Statham")], "assets/images/mv4.jpg", 1234),
      new Movie('1', "Fast and furious 1", new Actor('1', "John Lin"), "Awesome and exciting.", new Date("7/7/2017"), new Genre('2', "Drama"), new ContentRating('1', "PG-16"), 7.8, [new Actor('1', "Jason Statham")], "assets/images/mv1.jpg", 1234),
      new Movie('1', "Fast and furious 2", new Actor('1', "John Lin"), "Awesome and exciting.", new Date("7/7/2017"), new Genre('2', "Drama"), new ContentRating('1', "PG-16"), 7.8, [new Actor('1', "Jason Statham")], "assets/images/mv2.jpg", 1234),
      new Movie('1', "Fast and furious 3", new Actor('1', "John Lin"), "Awesome and exciting.", new Date("7/7/2017"), new Genre('2', "Drama"), new ContentRating('1', "PG-16"), 7.8, [new Actor('1', "Jason Statham")], "assets/images/mv3.jpg", 1234),
      new Movie('1', "Fast and furious 4", new Actor('1', "John Lin"), "Awesome and exciting.", new Date("7/7/2017"), new Genre('2', "Drama"), new ContentRating('1', "PG-16"), 7.8, [new Actor('1', "Jason Statham")], "assets/images/mv4.jpg", 1234),
    ];
  }

  public initMoviesByGenre(){
    this.moviesByGenre=new Map()
    this.movies.forEach((value)=>{
      if(Array.from(this.moviesByGenre.keys()).includes(value.genre.id)){
        this.moviesByGenre.get(value.genre.id).push(value)
      }else{
        this.moviesByGenre.set(value.genre.id,[value])
      }
    })
  }

  public getMovieById(movieId:string):Movie{
    var result:Movie
    this.movies.forEach((value)=>{  
      if(value.id==movieId){
        result= value;
      }
    })
    return result
  }

}

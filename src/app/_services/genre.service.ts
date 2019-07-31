import { Injectable } from '@angular/core';
import { Genre } from '../_models/genre';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  public genres: Array<Genre>;

  constructor() { 
    this.genres=[
      new Genre('1', "Action"),
      new Genre('2', "Drama"),
      new Genre('3', "Thriller"),
      new Genre('4', "Comedy")
    ]
  }

}

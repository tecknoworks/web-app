import { Injectable } from '@angular/core';
import { Genre } from '../_models/genre';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  private _genres: Genre[];

  constructor(private _http: HttpClient) { 
    this.initGenres();
  }

  public async initGenres(){
    // debugger;
    this._genres= await this._http.get<Genre[]>("http://localhost:8080/details/genre/all").toPromise()
  }

  public get genres() :Genre[]{
    return this._genres;
  }
}

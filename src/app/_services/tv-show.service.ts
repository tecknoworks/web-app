import { Injectable } from '@angular/core';
import { TvShow } from '../_models/tv-show';
import { Actor } from '../_models/actor';
import { Genre } from '../_models/genre';
import { ContentRating } from '../_models/content-rating';
import { Episode } from '../_models/episode';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { stringify } from 'querystring';


@Injectable({
  providedIn: 'root'
})
export class TvShowService {

  private _tvShows: TvShow[] = [];
  private _tvShow: TvShow
  private _tvShowsByGenre: Map<string, TvShow[]> = new Map();
  
  constructor(private _httpClient: HttpClient) {
  }

  public get tvShowsByGenre(): Map<string, TvShow[]> {
    return this._tvShowsByGenre;
  }

  public get tvShows(): TvShow[] {
    return this._tvShows;
  }

  public get tvShow(): TvShow{
    return this._tvShow
  }

  public async initTvShows() {
    this._tvShows = await this._httpClient.get<TvShow[]>(`${environment.gatewayApi}/tv-shows/all`).toPromise()
  }

  public async initTvShowsByGenre() {
    this._tvShowsByGenre = await this._httpClient.get<Map<string, TvShow[]>>(`${environment.gatewayApi}/tv-shows/all-by-genre`).toPromise()
    
  }

  public async initTvShowById(tvShowId: string) {
    let params = new HttpParams();
    params = params.append('tvShowId', tvShowId);
    this._tvShow= await this._httpClient.get<TvShow>(`${environment.gatewayApi}/tv-shows/one`, {params: params}).toPromise()
  }

  
}

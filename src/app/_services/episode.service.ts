import { Injectable } from '@angular/core';
import { Episode } from '../_models/episode';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  private _episodeList:Episode[] =[]
  private _episode:Episode;
  private _seasonList:Map<string, Episode[]>= new Map()

  constructor(private _httpClient: HttpClient) { }

  public get episodeList():Episode[]{
    return this._episodeList
  }

  public get seasonList():Map<string, Episode[]>{
    return this._seasonList
  }

  public get episode():Episode{
    return this._episode
  }

  public async initEpisodeList(tvShowId:string):Promise<void>{
    this._episodeList=await this._httpClient.get<Episode[]>(`${environment.gatewayApi}/tv-shows/${tvShowId}/episode/all`).toPromise()
  }

  public async initSeasonList(tvShowId: string):Promise<void>{
    this._seasonList= await this._httpClient.get<Map<string, Episode[]>>(`${environment.gatewayApi}/tv-shows/${tvShowId}/seasons`).toPromise()
  }

  public async initEpisodeById(episodeId: string):Promise<void>{
    this._episode=await this._httpClient.get<Episode>(`${environment.gatewayApi}/tv-shows/episode/${episodeId}`).toPromise()
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { HistoryRecord } from '../_models/history-record';
import { MovieService } from './movie.service';

@Injectable({
  providedIn: 'root'
})
export class VideoHistoryService {

  constructor(private _httpClient: HttpClient, private _movieService: MovieService) { }

  public async postHistoryRecord($userId: string, $screenplayId: string, $screenplayType: string, $time: number, $videoDuration:number):Promise<void>{
    var result= await this._httpClient.post<HistoryRecord>(`${environment.gatewayApi}/history/`,{
      userId: $userId,
      screenplayId: $screenplayId,
      screenplayType: $screenplayType,
      time: $time,
      videoDuration: $videoDuration
    }).toPromise()
    this._movieService.initMovies()
  }

  public async updateHistoryRecord($videoRecord:HistoryRecord):Promise<void>{
    var result= await this._httpClient.put(`${environment.gatewayApi}/history/`, $videoRecord).toPromise()
    this._movieService.initMovies()
  }
}

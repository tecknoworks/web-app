import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AverageRating, Rating } from '../_models/rating';

@Injectable({
  providedIn: 'root'
})
export class RatingService {
  constructor(private _httpClient: HttpClient) { }

  public async getAverageRating(screenplayId: string): Promise<AverageRating> {
    let params = new HttpParams();
    params = params.append("screenplayId",screenplayId);
    var result = await this._httpClient.get<AverageRating>(`${environment.gatewayApi}/ratings/average`, { params: params }).toPromise()
    return result;
  }

  public async getRating(screenplayId: string): Promise<Rating>{
    let params = new HttpParams();
    params = params.append("screenplayId",screenplayId);
    var result = await this._httpClient.get<Rating>(`${environment.gatewayApi}/ratings/one`, { params: params }).toPromise()
    return result;
  }

  public async setRating(screenplayId: string): Promise<AverageRating> {
    let params = new HttpParams();
    params = params.append("screenplayId",screenplayId);
    var result = await this._httpClient.get<AverageRating>(`${environment.gatewayApi}/ratings/average`, { params: params }).toPromise()
    return result;
  }
}

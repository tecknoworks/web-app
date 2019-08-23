import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RisResult } from '../_models/ris-result';

@Injectable({
  providedIn: 'root'
})
export class RisService {

  private _risResult: RisResult;
  constructor(private _httpClient: HttpClient) { }

  public async searchByVideoFrame(videoId: string, offset: number):Promise<void>{
    this._risResult=null;
    let params = new HttpParams();
    offset=Math.floor(offset*1000)
    params=params.append("videoId",videoId);
    params=params.append("offset", offset.toString());
    this._risResult=await this._httpClient.get<RisResult>(`${environment.gatewayApi}/ris`,{params: params}).toPromise()
  }

  public get risResult():RisResult{
    return this._risResult;
  }

}

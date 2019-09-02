import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  constructor(private _httpClient: HttpClient) { }

  public imageUrl(id: string):string {
    return `${environment.gatewayApi}/assets/image/${id}`
  }

  public uploadImage() {

  }

}

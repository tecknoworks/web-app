import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor() { }

  public videoUrl(name:string):string{
    return `${environment.gatewayApi}/videos/stream?videoId=${name}`
  }

}

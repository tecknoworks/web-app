import { Component, OnInit } from '@angular/core';
import { TvShowService } from 'src/app/_services/tv-show.service';
import { ActivatedRoute } from '@angular/router';
import { TvShow } from 'src/app/_models/tv-show';
import { Episode } from 'src/app/_models/episode';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.scss']
})
export class TvShowComponent implements OnInit {

  public tvShowId:string
  public tvShow:TvShow

  constructor(private _tvShowService: TvShowService, private _activatedRoute: ActivatedRoute,private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.tvShowId=this._activatedRoute.snapshot.params['tv-show-id']
    this.tvShow=this._tvShowService.getTvShowById(this.tvShowId)
  }

  public get trailer(){
    return this.sanitizer.bypassSecurityTrustUrl(this.tvShow.trailer)
  }
}

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TvShowService } from 'src/app/_services/tv-show.service';
import { ActivatedRoute } from '@angular/router';
import { TvShow } from 'src/app/_models/tv-show';
import { Episode } from 'src/app/_models/episode';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { VideoService } from 'src/app/_services/video.service';

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.scss']
})
export class TvShowComponent implements OnInit {

  public tvShowId:string
  @ViewChild('videoPlayer', {static:false}) videoPlayer: ElementRef;

  constructor(
    private _tvShowService: TvShowService,
    private _activatedRoute: ActivatedRoute,
    private _videoService: VideoService
    ) { }

  ngOnInit() {
    this.tvShowId=this._activatedRoute.snapshot.params['tv-show-id']
    this._tvShowService.initTvShowById(this.tvShowId).then(()=>{
      setTimeout(()=>{this.videoPlayer.nativeElement.load()},500);
    })
    
  }

  public get tvShow(): TvShow{
    return this._tvShowService.tvShow
  }

  public get trailerUrl(): string{
    return this.tvShow!=null ? this._videoService.videoUrl(this.tvShow.trailer):"";
  }
}

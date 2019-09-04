import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TvShowService } from 'src/app/_services/tv-show.service';
import { Episode } from 'src/app/_models/episode';
import { TvShow } from 'src/app/_models/tv-show';
import { ActivatedRoute } from '@angular/router';
import { EpisodeService } from 'src/app/_services/episode.service';
import { VideoService } from 'src/app/_services/video.service';
import { AuthService } from 'src/app/_services/auth.service';
import { AssetService } from 'src/app/_services/asset.service';
import { MatDialog } from '@angular/material';
import { SignInComponent } from 'src/app/_shared/sign-in/sign-in.component';
import { RisService } from 'src/app/_services/ris.service';
import { FrameDetailsComponent } from 'src/app/_shared/frame-details/frame-details.component';
import { VideoHistoryService } from 'src/app/_services/video-history.service';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent implements OnInit {

  @ViewChild('videoPlayer', {static:false}) videoPlayer: ElementRef;
  public isPlaying=false;

  constructor(
    private _episodeService: EpisodeService, 
    private _tvShowService: TvShowService,
    private _videoService: VideoService, 
    private _activatedRoute: ActivatedRoute,
    private _authService: AuthService,
    private _assetService: AssetService,
    private _dialog: MatDialog,
    private _risService: RisService,
    private _videoHistoryService: VideoHistoryService
    ) {
    _activatedRoute.params.subscribe( async (val) => {
      await this.saveHistoryRecord();
      this.fetchData();
    });
   }

  ngOnInit() {
    this.fetchData()
  }


  fetchData(){
    var tvShowId=this._activatedRoute.snapshot.params['tv-show-id']
    var episodeId=this._activatedRoute.snapshot.params['episode-id']
    this._episodeService.currentEpisodeIdPlaying=episodeId;

    this._tvShowService.initTvShowById(tvShowId)
    this._episodeService.initEpisodeById(episodeId)
    this.isPlaying = false;
    
    
  }

  public get episode():Episode{
    return this._episodeService.episode
  }

  public get tvShow():TvShow{
    return this._tvShowService.tvShow
  }

  public get videoUrl():string{
    return this.episode!=null ? this._videoService.videoUrl(this.episode.video): '';
  }

  public get posterUrl(): string{
    return this._assetService.imageUrl(this.episode.poster);
  }

  public play(){
    if(this._authService.isAuth){
      this.isPlaying = true;
      setTimeout(()=>{
        this.videoPlayer.nativeElement.load();
        if(this.episode.historyRecord!=null)
          this.videoPlayer.nativeElement.currentTime=this.episode.historyRecord.time;  
      },500);
         
    }else{
      this._dialog.open(SignInComponent);
    }
  }

  async searchVideoFrame(){
    this._risService.searchByVideoFrame(this.episode.video, this.videoPlayer.nativeElement.currentTime)
      .then(()=>this._dialog.open(FrameDetailsComponent));
  }

  async saveHistoryRecord(){
    if(this._authService.isAuth && this.isPlaying){
      if(this.episode.historyRecord==null){
        var time=this.videoPlayer.nativeElement.currentTime
        var videoDuration=this.videoPlayer.nativeElement.duration
        var screenplayId=this.episode.id
        var screenplayType="episode"
        var userId=this._authService.currentUser.id;
        this._videoHistoryService.postHistoryRecord(userId, screenplayId, screenplayType, time, videoDuration).then(()=>{
          this._episodeService.initSeasonList(this.tvShow.id);
        });
      }else{
        var historyRecord=this.episode.historyRecord;
        historyRecord.time=this.videoPlayer.nativeElement.currentTime;
        this._videoHistoryService.updateHistoryRecord(this.episode.historyRecord).then(()=>{
          this._episodeService.initSeasonList(this.tvShow.id);
        });
      }
    }
  }

  ngOnDestroy(){
    this.saveHistoryRecord();
    this._episodeService.currentEpisodeIdPlaying = null;
  }

}

import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { Movie } from 'src/app/_models/movie';
import { MovieService } from 'src/app/_services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from 'src/app/_services/video.service';
import { VideoHistoryService } from 'src/app/_services/video-history.service';
import { Observable, of } from 'rxjs';
import { RisService } from 'src/app/_services/ris.service';
import { MatDialog } from '@angular/material';
import { FrameDetailsComponent } from 'src/app/_shared/frame-details/frame-details.component';
import { AuthService } from 'src/app/_services/auth.service';
import { AssetService } from 'src/app/_services/asset.service';
import { SignInComponent } from 'src/app/_shared/sign-in/sign-in.component';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  public movieId: string
  public isPlaying= false;
  public movie:Movie
  @ViewChild('videoPlayer', {static:false}) videoPlayer: ElementRef;

  constructor(
    private _dialog: MatDialog,
    private _movieService: MovieService,
    private _activatedRoute: ActivatedRoute,
    private _videoService: VideoService,
    private _assetService: AssetService,
    private _videoHistoryService: VideoHistoryService,
    private _risService: RisService,
    private _authService: AuthService
  ) { }

  ngOnInit() {
    this.movieId = this._activatedRoute.snapshot.params['movie-id'];
    this._movieService.getMovieById(this.movieId).then((movie)=>{
      this.movie= movie;
    });
  }

  ngOnDestroy(){
    if(this._authService.isAuth && this.isPlaying){
      if(this.movie.historyRecord==null){
        var time=this.videoPlayer.nativeElement.currentTime
        var videoDuration=this.videoPlayer.nativeElement.duration
        var screenplayId=this.movieId
        var screenplayType="movie"
        var userId=JSON.parse(localStorage.getItem('user')).id;
        this._videoHistoryService.postHistoryRecord(userId, screenplayId, screenplayType, time, videoDuration)
      }else{
        var historyRecord=this.movie.historyRecord;
        historyRecord.time=this.videoPlayer.nativeElement.currentTime;
        this._videoHistoryService.updateHistoryRecord(this.movie.historyRecord)
      }
    }
  }

  async searchVideoFrame(){
    this._risService.searchByVideoFrame(this.movie.video, this.videoPlayer.nativeElement.currentTime);
    this._dialog.open(FrameDetailsComponent);
  }

  public get videoUrl():string{    
    return this.movie!=null ? this._videoService.videoUrl(this.movie.video): "";
  }

  public get videoPosterUrl():string{
    return this.movie!=null ? this._assetService.imageUrl(this.movie.videoPoster): "";
  }

  public play(){
    if(this._authService.isAuth){
      this.isPlaying = true;
      console.log(this.movie);
      setTimeout(()=>{
        this.videoPlayer.nativeElement.load();
        if(this.movie.historyRecord!=null)
          this.videoPlayer.nativeElement.currentTime=this.movie.historyRecord.time;  
      },500);
         
    }else{
      this._dialog.open(SignInComponent);
    }
  }

}

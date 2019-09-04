import { Component, OnInit, Input } from '@angular/core';
import { Episode } from 'src/app/_models/episode';
import { AssetService } from 'src/app/_services/asset.service';
import { EpisodeService } from 'src/app/_services/episode.service';

@Component({
  selector: 'app-episode-card',
  templateUrl: './episode-card.component.html',
  styleUrls: ['./episode-card.component.scss']
})
export class EpisodeCardComponent implements OnInit {

  @Input() episode:Episode  
  private _timeViewed: number

  constructor(
    private _assetService: AssetService,
    private _episodeService: EpisodeService
  ) { }

  ngOnInit() {
    this.initTimeViewed();
  }

  ngOnChanges(){
    this.initTimeViewed()
  }

  public get imageUrl(){
    return this._assetService.imageUrl(this.episode.poster);
  }
  
  public initTimeViewed():void{
    if(this.episode.historyRecord!=null){
      this._timeViewed =  (this.episode.historyRecord.time/this.episode.historyRecord.videoDuration)*100    
    }
  }

  public get timeViewed():number{
    return this._timeViewed;
  }

  public get isCurrent(): boolean{
    return this._episodeService.currentEpisodeIdPlaying == this.episode.id 
      ? true 
      : false ;
  }
}

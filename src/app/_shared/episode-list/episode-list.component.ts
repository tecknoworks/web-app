import { Component, OnInit, Input } from '@angular/core';
import { TvShow } from 'src/app/_models/tv-show';
import { Episode } from 'src/app/_models/episode';
import { EpisodeService } from 'src/app/_services/episode.service';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.scss']
})
export class EpisodeListComponent implements OnInit {

  @Input() tvShow: TvShow

  constructor(private _episodeService: EpisodeService) { }

  ngOnInit() {
  }

  ngOnChanges(){
    this._episodeService.initSeasonList(this.tvShow.id)
  }

  public get seasonRange():Array<string>{
    var result:Array<string>=new Array()
    for(var i=1;i<=this.tvShow.seasonsNo;i++){
      result.push(i.toString())
    }
    return result
  }

  public seasonEpisodes(seasonNo:string):Array<Episode>{
    return this._episodeService.seasonList[seasonNo]
  }

}

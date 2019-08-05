import { Component, OnInit, Input } from '@angular/core';
import { TvShow } from 'src/app/_models/tv-show';
import { Episode } from 'src/app/_models/episode';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.scss']
})
export class EpisodeListComponent implements OnInit {

  @Input() tvShow: TvShow
  public episodeMap:Map<number, Array<Episode>> =new Map()

  constructor() { }

  ngOnInit() {
    this.tvShow.episodeList.forEach((value)=>{
      if(Array.from(this.episodeMap.keys()).includes(value.seasonNo)){
        this.episodeMap.get(value.seasonNo).push(value)
      }else{
        this.episodeMap.set(value.seasonNo,[value])
      }
    })
  }

  public get seasonRange():Array<number>{
    var result:Array<number>=new Array()
    for(var i=1;i<=this.tvShow.seasonsNo;i++){
      result.push(i)
    }
    return result
  }

  public seasonEpisodes(seasonNo:number):Array<Episode>{
    return this.episodeMap.get(seasonNo)
  }

}

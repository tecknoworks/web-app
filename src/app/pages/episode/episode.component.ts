import { Component, OnInit } from '@angular/core';
import { TvShowService } from 'src/app/_services/tv-show.service';
import { Episode } from 'src/app/_models/episode';
import { TvShow } from 'src/app/_models/tv-show';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent implements OnInit {

  public episode:Episode
  public tvShow:TvShow

  constructor(private _tvShowService: TvShowService,private _activatedRoute: ActivatedRoute) {
    _activatedRoute.params.subscribe(val => {
      this.fetchData()
    });
   }

  ngOnInit() {
    this.fetchData()
  }

  fetchData(){
    var tvShowId=this._activatedRoute.snapshot.params['tv-show-id']
    var episodeId=this._activatedRoute.snapshot.params['episode-id']
    this._tvShowService.tvShows.forEach((show)=>{
      if(show.id==tvShowId){
        this.tvShow=show
        this.tvShow.episodes.forEach((ep)=>{
          if(ep.id==episodeId){
            this.episode=ep
          }
        })
      }
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { TvShowService } from 'src/app/_services/tv-show.service';
import { Episode } from 'src/app/_models/episode';
import { TvShow } from 'src/app/_models/tv-show';
import { ActivatedRoute } from '@angular/router';
import { EpisodeService } from 'src/app/_services/episode.service';
import { VideoService } from 'src/app/_services/video.service';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent implements OnInit {

  constructor(private _episodeService: EpisodeService, private _tvShowService: TvShowService,private _videoService: VideoService, private _activatedRoute: ActivatedRoute) {
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
    this._tvShowService.initTvShowById(tvShowId)
    this._episodeService.initEpisodeById(episodeId)
  }

  public get episode():Episode{
    return this._episodeService.episode
  }

  public get tvShow():TvShow{
    return this._tvShowService.tvShow
  }

  public get videoUrl():string{
    return this._videoService.videoUrl(this.episode.id);
  }

}

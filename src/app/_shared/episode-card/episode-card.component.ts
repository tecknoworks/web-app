import { Component, OnInit, Input } from '@angular/core';
import { Episode } from 'src/app/_models/episode';
import { AssetService } from 'src/app/_services/asset.service';

@Component({
  selector: 'app-episode-card',
  templateUrl: './episode-card.component.html',
  styleUrls: ['./episode-card.component.scss']
})
export class EpisodeCardComponent implements OnInit {

  @Input() episode:Episode  
  constructor(private _assetService: AssetService) { }

  ngOnInit() {
  }

  public get imageUrl(){
    return this._assetService.imageUrl(this.episode.id);
  }
  

}

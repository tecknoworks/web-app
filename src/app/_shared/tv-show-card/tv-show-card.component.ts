import { Component, OnInit, Input } from '@angular/core';
import { TvShow } from 'src/app/_models/tv-show';
import { AssetService } from 'src/app/_services/asset.service';

@Component({
  selector: 'app-tv-show-card',
  templateUrl: './tv-show-card.component.html',
  styleUrls: ['./tv-show-card.component.scss']
})
export class TvShowCardComponent implements OnInit {

  @Input() tvShow: TvShow

  constructor(private _assetService: AssetService) { }

  ngOnInit() {  }

  public get imageUrl():string{
    return this._assetService.imageUrl(this.tvShow.poster);
  }

}

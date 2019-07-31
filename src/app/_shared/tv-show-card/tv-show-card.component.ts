import { Component, OnInit, Input } from '@angular/core';
import { TvShow } from 'src/app/_models/tv-show';

@Component({
  selector: 'app-tv-show-card',
  templateUrl: './tv-show-card.component.html',
  styleUrls: ['./tv-show-card.component.scss']
})
export class TvShowCardComponent implements OnInit {

  @Input() tvShow: TvShow

  constructor() { }

  ngOnInit() {  }

}

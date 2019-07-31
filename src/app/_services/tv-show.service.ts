import { Injectable } from '@angular/core';
import { TvShow } from '../_models/tv-show';
import { Actor } from '../_models/actor';
import { Genre } from '../_models/genre';
import { ContentRating } from '../_models/content-rating';
import { Episode } from '../_models/episode';

@Injectable({
  providedIn: 'root'
})
export class TvShowService {

  public tvShows: Array<TvShow> = new Array();
  public tvShowsByGenre: Map<string, Array<TvShow>> = new Map()
  constructor() {
    this.tvShows = this.mockData()
  }

  public initTvShowsByGenre() {
    this.tvShowsByGenre=new Map()
    this.tvShows.forEach((value) => {
      if (Array.from(this.tvShowsByGenre.keys()).includes(value.genre.id)) {
        this.tvShowsByGenre.get(value.genre.id).push(value)
      } else {
        this.tvShowsByGenre.set(value.genre.id, [value])
      }
    })
  }

  public getTvShowById(tvShowId: string): TvShow {
    var result: TvShow
    this.tvShows.forEach((value) => {
      if (value.id == tvShowId) {
        result = value
      }
    })
    return result
  }

  public mockData(): Array<TvShow> {
    var seasonMap: Array<Episode> =new Array()
    seasonMap.push(new Episode("1", "Episode title 1", "Description 1",new Date("7/7/2017"), 1, 1,"1","assets/images/r1.jpg","https://www.youtube.com/embed/hMANIarjT50"))
    seasonMap.push(new Episode("2", "Episode title 1 and its veery long title indeed, hope it's not gonna break my webpage", "Description 1",new Date("7/7/2017"), 1, 2,"3", "assets/images/r1.jpg","https://www.youtube.com/embed/hMANIarjT50"))
    seasonMap.push(new Episode("3", "Episode title 1", "Description 1",new Date("7/7/2017"), 1, 3,"2", "assets/images/r1.jpg","https://www.youtube.com/embed/hMANIarjT50"))
    seasonMap.push(new Episode("4", "Episode title 1", "Description 1",new Date("7/7/2017"), 2, 1,"3", "assets/images/r1.jpg","https://www.youtube.com/embed/hMANIarjT50"))
    seasonMap.push(new Episode("5", "Episode title 1", "Description 1",new Date("7/7/2017"), 2, 2,"4", "assets/images/r1.jpg","https://www.youtube.com/embed/hMANIarjT50"))
    seasonMap.push(new Episode("6", "Episode title 1", "Description 1",new Date("7/7/2017"), 2, 3,"5", "assets/images/r1.jpg","https://www.youtube.com/embed/hMANIarjT50"))
    seasonMap.push(new Episode("7", "Episode title 1", "Description 1",new Date("7/7/2017"),3, 1,"6", "assets/images/r1.jpg","https://www.youtube.com/embed/hMANIarjT50"))
    seasonMap.push(new Episode("8", "Episode title 1", "Description 1",new Date("7/7/2017"), 3, 2,"1", "assets/images/r1.jpg","https://www.youtube.com/embed/hMANIarjT50"))
    seasonMap.push(new Episode("9", "Episode title 1", "Description 1",new Date("7/7/2017"), 3, 3,"2", "assets/images/r1.jpg","https://www.youtube.com/embed/hMANIarjT50"))
    return [
      new TvShow('1', "Money Heist 1", new Actor("1", "john tom"), "Money Heist (Spanish: La casa de papel, lit. 'The House of Paper') is a Spanish heist television series created by Álex Pina. The story in the first two parts revolves around a long-prepared, multi-day assault on the Royal Mint of Spain in which a team of people take hold of hostages as part of their plan to print, and escape with, €2.4 billion. The third part revolves around an assault on the Bank of Spain. It was initially intended as a limited series and premiered on 2 May 2017 on Spanish network Antena 3. Antena 3 distributed the series in Spain before Netflix acquired it in late 2017; Netflix edited the series and re-released it worldwide. Money Heist stars Úrsula Corberó, Itziar Ituño, Álvaro Morte, Miguel Herrán, Paco Tous, Pedro Alonso, and Alba Flores.[2] In April 2018, Netflix renewed the series for a third part, which was released on 19 July 2019. Part 4 is currently in production.", new Date("7/7/2017"), 3, new Genre('1', "Action"), new ContentRating('1', "PG-15"), 8.5, [new Actor('1', "john loft"), new Actor('2', "john tiom")], "assets/images/eg1.jpg", "http://afterglowplayer.com/sandbox/v1/afterglow_local_hd.mp4",
        seasonMap
      ),
      new TvShow('2', "Money Heist 2", new Actor("1", "john tom"), "A lot of action", new Date("7/7/2017"), 3, new Genre('2', "Drama"), new ContentRating('1', "PG-15"), 8.5, [new Actor('1', "john loft"), new Actor('2', "john tiom")], "assets/images/eg1.jpg", "https://www.youtube.com/embed/hMANIarjT50",
        seasonMap
      ),
      new TvShow('3', "Money Heist 3", new Actor("1", "john tom"), "A lot of action", new Date("7/7/2017"), 3, new Genre('3', "Thriller"), new ContentRating('1', "PG-15"), 8.5, [new Actor('1', "john loft"), new Actor('2', "john tiom")], "assets/images/eg1.jpg", "https://www.youtube.com/embed/hMANIarjT50",
        seasonMap
      ),
      new TvShow('4', "Money Heist 4", new Actor("1", "john tom"), "A lot of action", new Date("7/7/2017"), 3, new Genre('4', "Comedy"), new ContentRating('1', "PG-15"), 8.5, [new Actor('1', "john loft"), new Actor('2', "john tiom")], "assets/images/eg1.jpg", "https://www.youtube.com/embed/hMANIarjT50",
        seasonMap
      ),
      new TvShow('5', "Money Heist 5", new Actor("1", "john tom"), "A lot of action", new Date("7/7/2017"), 3, new Genre('1', "Action"), new ContentRating('1', "PG-15"), 8.5, [new Actor('1', "john loft"), new Actor('2', "john tiom")], "assets/images/eg1.jpg", "https://www.youtube.com/embed/hMANIarjT50",
        seasonMap
      ),
      new TvShow('6', "Money Heist 6", new Actor("1", "john tom"), "A lot of action", new Date("7/7/2017"), 3, new Genre('2', "Drama"), new ContentRating('1', "PG-15"), 8.5, [new Actor('1', "john loft"), new Actor('2', "john tiom")], "assets/images/eg1.jpg", "https://www.youtube.com/embed/hMANIarjT50",
        seasonMap
      ),
    ];
  }
}

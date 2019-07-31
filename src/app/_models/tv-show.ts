import {Genre} from './genre';
import {ContentRating} from './content-rating';
import {Actor} from './actor';
import {Episode} from './episode';

export class TvShow {
    id:string;
    title: string;
    producer: Actor;
    description: string;
    releaseDate: Date;
    seasonsNo: number;
    genre: Genre;
    contentRating: ContentRating;
    userRating: number;
    distribution: Array<Actor>;
    poster: string;
    trailer: string;
    episodes: Array<Episode>;
    constructor($id: string, $title: string, $producer: Actor, $description: string, $releaseDate: Date, $seasonsNo: number, $genre: Genre, $contentRating: ContentRating, $userRating: number, $distribution: Array<Actor>, $poster: string, $trailer:string, $episodes: Array<Episode>) {
		this.id = $id;
		this.title = $title;
		this.producer = $producer;
		this.description = $description;
		this.releaseDate = $releaseDate;
		this.seasonsNo = $seasonsNo;
		this.genre = $genre;
		this.contentRating = $contentRating;
		this.userRating = $userRating;
		this.distribution = $distribution;
        this.poster = $poster;
        this.episodes= $episodes;
    }

}

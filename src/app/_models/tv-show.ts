import {Genre} from './genre';
import {ContentRating} from './content-rating';
import {Actor} from './actor';
import {Episode} from './episode';
import { HistoryRecord } from './history-record';

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
    actorList: Array<Actor>;
    poster: string;
    trailer: string;
    
    constructor($id: string, $title: string, $producer: Actor, $description: string, $releaseDate: Date, $seasonsNo: number, $genre: Genre, $contentRating: ContentRating, $userRating: number, $actorList: Array<Actor>, $poster: string, $trailer:string) {
		this.id = $id;
		this.title = $title;
		this.producer = $producer;
		this.description = $description;
		this.releaseDate = $releaseDate;
		this.seasonsNo = $seasonsNo;
		this.genre = $genre;
		this.contentRating = $contentRating;
		this.userRating = $userRating;
		this.actorList = $actorList;
        this.poster = $poster;
    }

}

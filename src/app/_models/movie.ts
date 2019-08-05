import { Actor } from './actor';
import { Genre } from './genre';
import { ContentRating } from './content-rating';

export class Movie {
    id:string;
    title: string;
    producer: Actor;
    description: string;
    releaseDate: Date;
    genre: Genre;
    contentRating: ContentRating;
    userRating: number;
    distribution: Array<Actor>;
    poster: string;
    runtime: number;

	constructor($id: string, $title: string, $producer: Actor, $description: string, $releaseDate: Date, $genre: Genre, $contentRating: ContentRating, $userRating: number, $distribution: Array<Actor>, $poster: string, $runtime: number) {
		this.id = $id;
		this.title = $title;
		this.producer = $producer;
		this.description = $description;
		this.releaseDate = $releaseDate;
		this.genre = $genre;
		this.contentRating = $contentRating;
		this.userRating = $userRating;
		this.distribution = $distribution;
		this.poster = $poster;
		this.runtime = $runtime;
	}

}

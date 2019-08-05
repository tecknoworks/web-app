export class ContentRating {
    id:string;
	rating:string;
	description:string;

	constructor($id: string, $rating: string, $description: string) {
		this.id = $id;
		this.rating = $rating;
		this.description=$description;
	}

}

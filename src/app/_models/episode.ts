export class Episode {
    id: string;
    title: string;
    description: string;
    seasonNo: number;
    episodeNo: number;
    tvShowId: string;
    releaseDate: Date;
    poster: string;
    video: string;

    constructor($id: string, $title: string, $description: string, $releaseDate: Date, $season: number, $episode: number, $tvShowId:string, $poster: string, $video: string) {
        this.id = $id;
        this.title = $title;
        this.description = $description;
        this.releaseDate=$releaseDate;
        this.seasonNo = $season;
        this.episodeNo = $episode;
        this.tvShowId = $tvShowId
        this.poster = $poster
        this.video = $video;
    }

}



export class MovieResponse {
    page:Number;
    results:Array<Movie>;
}

export class Movie {
    adult:boolean;
    poster_path:string;
    overview:string;
    release_date:string;
    title:string;
    vote_average:Number;
    vote_count:Number;
}
import { Movie } from './../../services/MovieResponse';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-tile',
  templateUrl: './movie-tile.component.html',
  styleUrls: ['./movie-tile.component.scss']
})
export class MovieTileComponent implements OnInit {
  
  @Input("movie")
  private movie:Movie;

  private POSTER_IMG_BASE_URL="https://image.tmdb.org/t/p/w200"

  constructor() { }

  ngOnInit() {
    console.log("movie:" + this.movie.title);
  }

}

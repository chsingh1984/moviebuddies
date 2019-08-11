import { Component } from '@angular/core';
import { MovieResponse, Movie } from './services/MovieResponse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'moviebuddies';
  moviesList:Array<Movie>;

  populateMovies(moviesResponse:MovieResponse) {
    this.moviesList = moviesResponse.results;
    console.log("app comoponent has moviesList:" + this.moviesList)
  }
}

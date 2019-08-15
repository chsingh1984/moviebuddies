import { Component } from '@angular/core';
import { StarRatingComponent } from 'ng-starrating';
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

  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    console.log(`Old Value:${$event.oldValue}, 
      New Value: ${$event.newValue}, 
      Checked Color: ${$event.starRating.checkedcolor}, 
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }
}

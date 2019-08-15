import { MoviedbserviceService } from './../services/moviedbservice.service';
import { Component, OnInit, ViewChild,EventEmitter, Output } from '@angular/core';
import { MovieResponse } from './../services/MovieResponse';
import { Movie } from './../services/MovieResponse';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  @Output()
  searchResultsEmitter:EventEmitter<MovieResponse> = new EventEmitter<MovieResponse>();
  
  
  //@ViewChild('keyword') query;
  private movieResponse:MovieResponse;
  private moviesList:Array<Movie>;
  private errorMsg: string;
  constructor(private moviedbService:MoviedbserviceService) { }

  ngOnInit() {

  }

  fetchMovies(query) {
    console.log("fetching movies for:" + query);
    try {
      this.moviedbService.getMovies(query).subscribe(response=>{
        this.searchResultsEmitter.emit(response);
        console.log("response recieved:" + response)
      }); 
    } catch(e) {
      this.errorMsg="Server is busy,sorry for the inconvenience, please try again later.";
    } 
  }

}

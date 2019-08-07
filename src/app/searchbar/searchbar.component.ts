import { MoviedbserviceService } from './../services/moviedbservice.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {

  //@ViewChild('keyword') query;
  private moviesList:any;
  
  constructor(private moviedbService:MoviedbserviceService) { }

  ngOnInit() {

  }

  fetchMovies(query) {
    console.log("fetching movies for:" + query);
    this.moviedbService.getMovies(query).subscribe(response=>{
      this.moviesList = response;
      console.log("response recieved:" + response)
    }); 
  }

}

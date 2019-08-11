import { Movie, MovieResponse } from './../../services/MovieResponse';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MoviedbserviceService } from 'src/app/services/moviedbservice.service';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.scss']
})
export class MovielistComponent implements OnInit,OnChanges {

  @Input()
  private moviesList:Array<Movie>;
  
  constructor(private moviedbService:MoviedbserviceService) { }

  ngOnInit() {
    console.log("moviesList component:" + this.moviesList);
  }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    //throw new Error("Method not implemented.");
  }
    

}

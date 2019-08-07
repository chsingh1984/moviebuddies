import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviedbserviceService {

  private API_KEY:string="8eeff62fec8e4e37548cfc9fd6f6969f";
  private API_URL="https://api.themoviedb.org/3/search/movie?api_key="+this.API_KEY;
  
  constructor(private httpClient:HttpClient) { 

  }

  getMovies(keyword:string):Observable<any> {
    return this.httpClient.get(this.API_URL+"&query="+keyword+"&language=en-US&page=1&include_adult=false");
  }


}

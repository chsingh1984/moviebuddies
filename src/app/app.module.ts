import { StarRatingModule } from 'angular-star-rating';
import { MoviedbserviceService } from './services/moviedbservice.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { MovieTileComponent } from './moviesPicker/movie-tile/movie-tile.component';
import { MovielistComponent } from './moviesPicker/movielist/movielist.component';
import { HttpClientModule } from '@angular/common/http';
import { RatingModule } from 'ng-starrating';
import { FbloginComponent } from './fblogin/fblogin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchbarComponent,
    MovieTileComponent,
    MovielistComponent,
    FbloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RatingModule
  ],
  providers: [MoviedbserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

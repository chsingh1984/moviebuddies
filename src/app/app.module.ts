import { MoviedbserviceService } from './services/moviedbservice.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { MoviesPickerComponent } from './movies-picker/movies-picker.component';
import { MovieTileComponent } from './moviesPicker/movie-tile/movie-tile.component';
import { MovielistComponent } from './moviesPicker/movielist/movielist.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchbarComponent,
    MoviesPickerComponent,
    MovieTileComponent,
    MovielistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MoviedbserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

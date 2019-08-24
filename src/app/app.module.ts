import { MoviedbserviceService } from './services/moviedbservice.service';
import { UserDataService } from './services/userdata.service';
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
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';

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
    RatingModule,
    AngularFirestoreModule, 
    AngularFireModule.initializeApp(environment.firebase,"moviebuddies")
  ],
  providers: [MoviedbserviceService,UserDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

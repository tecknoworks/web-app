import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './_shared/nav-bar/nav-bar.component';
import { MenuComponent } from './_shared/menu/menu.component';
import { SignInComponent } from './_shared/sign-in/sign-in.component';
import { SignUpComponent } from './_shared/sign-up/sign-up.component';
import { FormsModule }    from '@angular/forms';
import { MatCardModule, MatIconModule, MatNativeDateModule } from '@angular/material';
import {MatDialogModule, MatDialogRef, MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatExpansionModule} from '@angular/material/expansion';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { TvShowsComponent } from './pages/tv-shows/tv-shows.component';
import { TvShowCardComponent } from './_shared/tv-show-card/tv-show-card.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { MovieCardComponent } from './_shared/movie-card/movie-card.component';
import { HomeComponent } from './pages/home/home.component';
import { HistoryComponent } from './pages/history/history.component';
import { WatchPartyComponent } from './pages/watch-party/watch-party.component';
import { MovieComponent } from './pages/movie/movie.component';
import { TvShowComponent } from './pages/tv-show/tv-show.component';
import { EpisodeCardComponent } from './_shared/episode-card/episode-card.component';
import { SafePipe } from './_helpers/safe-pipe';
import { DateFormatPipe } from './_helpers/date-format-pipe';
import { CommentSectionComponent } from './_shared/comment-section/comment-section.component';
import { EpisodeListComponent } from './_shared/episode-list/episode-list.component';
import { EpisodeComponent } from './pages/episode/episode.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
   declarations: [
      AppComponent,
      MenuComponent,
      NavBarComponent,
      SignInComponent,
      SignUpComponent,
      TvShowsComponent,
      TvShowCardComponent,
      MoviesComponent,
      MovieCardComponent,
      HomeComponent,
      HistoryComponent,
      WatchPartyComponent,
      MovieComponent,
      TvShowComponent,
      EpisodeCardComponent,
      SafePipe,
      DateFormatPipe,
      CommentSectionComponent,
      EpisodeListComponent,
      EpisodeComponent
   ],
   entryComponents: [
      SignInComponent,
      SignUpComponent,
      NavBarComponent,
      MenuComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      MatDialogModule,
      BrowserAnimationsModule,
      MatCardModule,
      MatCheckboxModule,
      MatIconModule,
      MatDatepickerModule,
      MatFormFieldModule,
      MatNativeDateModule,
      MatRadioModule,
      AngularFontAwesomeModule,
      MatExpansionModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

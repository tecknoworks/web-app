import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavBarComponent } from './_shared/nav-bar/nav-bar.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { HomeComponent } from './pages/home/home.component';
import { TvShowsComponent } from './pages/tv-shows/tv-shows.component';
import { HistoryComponent } from './pages/history/history.component';
import { WatchPartyComponent } from './pages/watch-party/watch-party.component';
import { MovieComponent } from './pages/movie/movie.component';
import { TvShowComponent } from './pages/tv-show/tv-show.component';
import { EpisodeComponent } from './pages/episode/episode.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'tv-shows', component: TvShowsComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'watch-party', component: WatchPartyComponent },
  { path: 'movie/:movie-id', component: MovieComponent },
  { path: 'tv-show/:tv-show-id', component: TvShowComponent },
  { path: 'tv-show/:tv-show-id/episode/:episode-id', component: EpisodeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

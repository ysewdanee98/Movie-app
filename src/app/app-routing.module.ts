import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { LoginComponent } from './components/login/login.component';
import { GenreComponent } from './components/genre/genre.component';
import { SearchComponent } from './components/search/search.component';
import { ApiComponent } from './components/api/api.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent },
  {path: 'home', component: HomeComponent,
    children: [
      {path: 'genre/:genreSel', pathMatch: 'full', component: GenreComponent},
      {path: 'genre/:genreSel/movieDetails/:title', component: MovieDetailsComponent},
      {path: 'search/:searchText', component: SearchComponent},
      {path: 'search/:searchText/movieDetails/:title', component: MovieDetailsComponent},
      {path: 'api/:apiSel', component: ApiComponent}
    ] },
  {path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  constructor() {

  }

}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { LoginComponent } from './components/login/login.component';
import { GenreComponent } from './components/genre/genre.component';

const routes: Routes = [
  // {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent },
  {path: 'home', component: HomeComponent,
    children: [
      // {path: 'genre/:genre' , component: GenreComponent}
    ] },
  {path: 'movieDetails/:title' , component: MovieDetailsComponent},
  {path: 'genre/:genre' , component: GenreComponent},
  // {path: 'search/:title' , component: GenreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  constructor() {

  }

}

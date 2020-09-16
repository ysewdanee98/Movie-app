import { Component } from '@angular/core';
import { MovieService } from './providers/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'movie-app';

  movies: any = [];
  searchWord: string;

  constructor(private service: MovieService) {
    this.searchWord = "";
   }

  ngOnInit() {
    this.service.getMovieData().subscribe((dataM: any) => {
      this.movies = dataM;
    });

  }

  newSearch(newSearch: string){
    this.searchWord = newSearch;
  }

}

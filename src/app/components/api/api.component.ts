import { Movie } from './../../dto/movie';
import { Component, Input, OnInit } from '@angular/core';
import { MovieService } from 'src/app/providers/movie.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {

  movies: Movie[];

  constructor(private service: MovieService) {
    this.movies = [];
  }

  ngOnInit(): void {

  }

  @Input() apiSelected: string;

  getPopularMovies() {
    this.service.fetchPopularMovies().subscribe(() => {
      this.movies = this.service.movieList;
    });
    return this.movies; //Added to return list
  }

  getUpcomingMovies() {
    this.service.fetchUpcomingMovies().subscribe(() => {
      this.movies = this.service.movieList;
    });
    return this.movies; //Added to return list
  }

  getBackground(photo: string) {
    return {
      "background" : `url("https://image.tmdb.org/t/p/w300${photo}") center center no-repeat`,
      "height": "350px",
      "width": "275px",
    };
  }

}

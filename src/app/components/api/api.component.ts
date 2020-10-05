import { Movie } from './../../dto/movie';
import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/providers/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {

  movies: Movie[];

  constructor(private service: MovieService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("Api Page");
    this.movies = [];
    this.route.paramMap.subscribe(params => {
      this.apiSelected = params.get('apiSel');
    });
  }

  apiSelected: string;

  getPopularMovies() {
    this.service.fetchPopularMovies().subscribe(() => {
      this.movies = this.service.movieList;
      console.log(this.movies);
    });
    return this.movies;
  }

  getUpcomingMovies() {
    this.service.fetchUpcomingMovies().subscribe(() => {
      this.movies = this.service.movieList;
      console.log(this.movies);
    });
    return this.movies;
  }

  getList(){
    if (this.apiSelected == "Upcoming") {
      return this.getUpcomingMovies();
    } else if (this.apiSelected == "Popular") {
      return this.getPopularMovies();
    }
  }

  getBackground(photo: string) {
    return {
      "background" : `url("https://image.tmdb.org/t/p/w300${photo}") center center no-repeat`,
      "height": "350px",
      "width": "275px"
    };
  }

}

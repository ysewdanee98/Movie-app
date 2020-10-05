import { Movie } from './../../dto/movie';
import { MovieService } from './../../providers/movie.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movieList: Movie[];
  detailsMovie: Movie[];

  constructor(private service: MovieService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("Movie details page");
    this.movieList = [];
    this.detailsMovie = [];
    this.service.getMovieData().subscribe((dataM: any) => {
      this.movieList = dataM;
      console.log(this.movieList);
    });
  }

  getDetails(){
    this.route.paramMap.subscribe(params => {
      let movieTitle = params.get('title');
      this.detailsMovie = this.movieList.filter(p => p.title==movieTitle);
      console.log(this.detailsMovie);
    });
    return this.detailsMovie;
  }

}

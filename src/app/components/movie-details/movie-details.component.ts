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

  movieList: Movie[] = [];
  detailsMovie: Movie[] = [];

  constructor(private service: MovieService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getMovieData().subscribe((dataM: any) => {
      this.movieList = dataM;
    });

  }

  getDetails(){
    this.route.paramMap.subscribe(params => {
      let movieTitle = params.get('title');
      this.detailsMovie = this.movieList.filter(p => p.title==movieTitle);
    });
    return this.detailsMovie;
  }

}

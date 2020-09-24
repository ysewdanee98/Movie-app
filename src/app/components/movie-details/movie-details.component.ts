import { Movie } from './../../dto/movie';
import { MovieService } from './../../providers/movie.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  // @Input() movieTitle: string;
  // @Input() releaseDate: string;

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
      // console.log(params.get('title'));
      let movieTitle = params.get('title');
      this.detailsMovie = this.movieList.filter(p => p.title==movieTitle);
      // console.log(this.detailsMovie);
    });
    return this.detailsMovie;
  }

   getMovieDetails(){
    // let detailMovie: Movie[] = [];
    // for (let entry of this.movieList) {
    //   detailMovie = this.movieList.filter(m => m.title == this.movieTitle && m.releaseDate == this.releaseDate);
    // }
    // return detailMovie;
  }

}

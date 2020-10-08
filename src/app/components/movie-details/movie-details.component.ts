import { TranslateService } from '@ngx-translate/core';
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

  movieSelected: string;
  movieList: Movie[];
  detailsMovie: Movie[];
  isServiceLoaded: boolean;
  isMovieListLoaded: boolean;

  constructor(private service: MovieService, private route: ActivatedRoute, public translate: TranslateService) { }

  ngOnInit(): void {
    // console.log("Movie details page");
    this.movieSelected = ""
    this.route.paramMap.subscribe(params => {
      this.movieSelected = params.get('title');
      // console.log("From Url: " +this.movieSelected);
      this.isMovieListLoaded=false;
      // console.log("List details loaded? " + this.isMovieListLoaded);
      this.detailsMovie = [];
    });
    this.movieList = [];
    this.isServiceLoaded=false;
    this.service.getMovieData().subscribe((dataM: any) => {
      this.movieList = dataM;
      // console.log(this.movieList);
      this.isServiceLoaded=true;
      // console.log("Service loaded? " + this.isServiceLoaded);
    });
  }

  getDetails(){
    this.detailsMovie = this.movieList.filter(p => p.title==this.movieSelected);
    // console.log(this.detailsMovie);
    this.isMovieListLoaded=true;
    // console.log("List details loaded? " + this.isMovieListLoaded);
  }

}

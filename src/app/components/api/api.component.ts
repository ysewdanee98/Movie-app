import { Movie } from './../../dto/movie';
import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/providers/movie.service';
import { ActivatedRoute } from '@angular/router';
import { DialogRatingComponent } from '../dialog-rating/dialog-rating.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {

  movieList: Movie[];
  apiSelected: string;
  isMovieListLoaded: boolean;

  constructor(public dialog: MatDialog, private service: MovieService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // console.log("Api Page");
    this.apiSelected = "";
    this.route.paramMap.subscribe(params => {
      this.apiSelected = params.get('apiSel');
      // console.log("From Url: " +this.apiSelected);
      this.isMovieListLoaded=false;
      // console.log("List API loaded? " + this.isMovieListLoaded);
      this.movieList = [];
    });
  }

  getPopularMovies() {
    this.service.fetchPopularMovies().subscribe(() => {
      this.movieList = this.service.movieList;
      // console.log(this.movieList);
      // console.log("List API loaded? " + this.isMovieListLoaded);
    });
  }

  getUpcomingMovies() {
    this.service.fetchUpcomingMovies().subscribe(() => {
      this.movieList = this.service.movieList;
      // console.log(this.movieList);
      // console.log("List API loaded? " + this.isMovieListLoaded);
    });
  }

  getList(){
    if (this.apiSelected == "Upcoming") {
      this.getUpcomingMovies();
    } else if (this.apiSelected == "Popular") {
      this.getPopularMovies();
    }
    this.isMovieListLoaded=true;
  }

  getBackground(photo: string) {
    return {
      "background" : `url("https://image.tmdb.org/t/p/w300${photo}") center center no-repeat`,
      "height": "350px",
      "width": "275px"
    };
  }

  id: string;
  rating: number;
  openDialog(id: string): void {
    this.id = "";
    this.rating = null;
    this.id = id;
    const dialogRef = this.dialog.open(DialogRatingComponent, {
      width: '250px',
      data: {id: this.id, rating: this.rating}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.rating = result;
    });
  }

}

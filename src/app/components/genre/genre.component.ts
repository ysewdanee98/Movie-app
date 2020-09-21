import { Movie } from './../../dto/movie';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MovieService } from '../../providers/movie.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent implements OnInit {

  @Input() genreSelected: string = "";
  movieList: Movie[] = [];

  movieTitle: string;
  releaseDate: string;

  constructor(private service: MovieService) {
    this.movieTitle = "";
    this.releaseDate = "";
    this.isMovieDetailsSelected = false;
  }

  ngOnInit(): void {
    this.service.getMovieData().subscribe((dataM: any) => {
      this.movieList = dataM;
    });
  }

  oldGenre: string = "";
  getListMovieOfGenre(){
    if(this.oldGenre != this.genreSelected){
      this.oldGenre = this.genreSelected;
      this.ratingSelected = "All";
      // console.log(this.oldGenre);
    } else {
      //Do nothing
    }
    let listMovieOfGenre: Movie[] = [];
    for (let entry of this.movieList) {
      if(entry.genres.includes(this.genreSelected)){
        listMovieOfGenre.push(entry);
      }
    }
    return listMovieOfGenre;
  }

  @Input() isMovieDetailsSelected: boolean;
  @Output() newMovieDetailsEvent = new EventEmitter <{movieTitle: string, releaseDate: string, isMovieDetailsSelected: boolean}>();

  movieDetails(movieTitle: string, relDate: string){
    this.movieTitle = movieTitle;
    this.releaseDate = relDate;
    this.isMovieDetailsSelected = true;
    this.newMovieDetailsEvent.emit({movieTitle: this.movieTitle, releaseDate: this.releaseDate, isMovieDetailsSelected: this.isMovieDetailsSelected});
    // console.log(movieTitle+relDate);
  }

  public RatingStatus = {ratingSelected: "", movieByRatingList: []};
  ratingSelected: string;
  movieByRatingList: Movie[];

  changeRating(data){
    this.RatingStatus = data;
    this.ratingSelected = this.RatingStatus.ratingSelected;
    this.movieByRatingList = this.RatingStatus.movieByRatingList;
    console.log(this.ratingSelected);
  }

}

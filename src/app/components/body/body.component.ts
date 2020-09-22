import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../../providers/movie.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  constructor(private service: MovieService) {
    this.isGenreSelected = false;
    // this.isMovieDetailsSelected = false;
    this.isSearchSelected = false;
    this.isAPISelected = false;
  }

  ngOnInit(): void {
  }

  public GenreStatus = {genreSelected: "", isGenreSelected: false};
  genreSelected: string;
  isGenreSelected: boolean;

  changeGenre(data){
    this.GenreStatus = data;
    this.genreSelected = this.GenreStatus.genreSelected;
    this.isGenreSelected = this.GenreStatus.isGenreSelected;
    console.log(this.GenreStatus.genreSelected);
    // this.isMovieDetailsSelected = false;
    this.isSearchSelected = false;
    this.isAPISelected = false;
  }

  public MovieDetailsStatus = {movieTitle: "", releaseDate: "", isMovieDetailsSelected: false};
  movieTitle: string;
  releaseDate: string;
  isMovieDetailsSelected: boolean;

  changeMovieDetails(data){
    // this.MovieDetailsStatus = data;
    // this.movieTitle = this.MovieDetailsStatus.movieTitle;
    // this.releaseDate = this.MovieDetailsStatus.releaseDate;
    // this.isMovieDetailsSelected = this.MovieDetailsStatus.isMovieDetailsSelected;
    // console.log(this.MovieDetailsStatus.movieTitle);
    // this.isGenreSelected = false;
    // this.isSearchSelected = false;
    // this.isAPISelected = false;
  }

  @Input() searchMovie: string;
  @Input() isSearchSelected: boolean;

  updateSearch(){
    this.isGenreSelected = false;
    // this.isMovieDetailsSelected = false;
    this.isAPISelected = false;
  }

  @Input() apiSelected: string;
  @Input() isAPISelected: boolean;

  updateAPI(){
    // console.log(this.apiSelected);
    this.isGenreSelected = false;
    // this.isMovieDetailsSelected = false;
    this.isSearchSelected = false;
  }

}

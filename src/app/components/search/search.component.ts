import { MovieService } from './../../providers/movie.service';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Movie } from 'src/app/dto/movie';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  movieList: Movie[] = [];

  // movieTitle: string;
  // releaseDate: string;

  constructor(private service: MovieService, private route: ActivatedRoute) {
    // this.movieTitle = "";
    // this.releaseDate = "";
    this.isMovieDetailsSelected = false;
  }

  ngOnInit(): void {
    this.service.getMovieData().subscribe((dataM: any) => {
      this.movieList = dataM;
    });
    this.route.paramMap.subscribe(params => {
      // console.log(params.get('title'));
      this.searchMovie = params.get('title');
    });
  }

  // @Input() searchMovie: string;
  searchMovie: string;
  // @Input() isSearched: boolean;

  oldSearch: string = "";
  getSearchList(){
    if(this.oldSearch != this.searchMovie){
      this.oldSearch = this.searchMovie;
      this.ratingSelected = "All";
      // console.log(this.oldGenre);
    } else {
      //Do nothing
    }
    let listSearched: Movie[] = [];
    let title: string;
    let anoTitle: string;
    this.searchMovie = this.searchMovie.toLowerCase().trim();
    if (this.searchMovie == "") {
      //Do nothing
    } else {
      for (let entry of this.movieList) {
        title = entry.originalTitle;
        anoTitle = entry.title;
        title = title.toLowerCase().trim();
        anoTitle = anoTitle.toLowerCase().trim();
        if(title.includes(this.searchMovie)){
          listSearched.push(entry);
        }else if(anoTitle.includes(this.searchMovie)){
          listSearched.push(entry);
        }
      }
    }
    return listSearched;
  }

  @Input() isMovieDetailsSelected: boolean;
  @Output() newMovieDetailsEvent = new EventEmitter <{movieTitle: string, releaseDate: string, isMovieDetailsSelected: boolean}>();

  movieDetails(movieTitle: string, relDate: string){
    // this.movieTitle = movieTitle;
    // this.releaseDate = relDate;
    // this.isMovieDetailsSelected = true;
    // this.newMovieDetailsEvent.emit({movieTitle: this.movieTitle, releaseDate: this.releaseDate, isMovieDetailsSelected: this.isMovieDetailsSelected});
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

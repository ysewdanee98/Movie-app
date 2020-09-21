import { Movie } from './../../dto/movie';
import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-filter-rating',
  templateUrl: './filter-rating.component.html',
  styleUrls: ['./filter-rating.component.scss']
})
export class FilterRatingComponent implements OnInit {

  @Input() ratingSelected: string;
  @Input() listMoviesNotFiltered: Movie[];
  movieByRating: Movie[];

  constructor() {
    this.ratingSelected = "All";
    this.movieByRating = [];
  }

  ngOnInit(): void {

  }

  @Output() newRatingEvent = new EventEmitter <{ratingSelected: string, movieByRatingList: Movie[]}>();

  getFilteredMovie(rating: string){
    this.ratingSelected = rating;
    this.newRatingEvent.emit({ratingSelected: this.ratingSelected, movieByRatingList: this.getFilterList()});
    // console.log(this.ratingSelected);
  }

  getFilterList(){
    let listArray: Movie[] = [];
    let optionArray: Movie[] = [];
    optionArray = this.listMoviesNotFiltered;
    if (this.ratingSelected == "All") {
      for (let entry of optionArray) {
        listArray.push(entry);
      }
    } else if (this.ratingSelected == ">= 8.5") {
      for (let entry of optionArray) {
        listArray = optionArray.filter(m => m.imdbRating >= 8.5 );
      }
    } else if (this.ratingSelected == "< 8.5") {
      for (let entry of optionArray) {
        listArray = optionArray.filter(m => m.imdbRating < 8.5 );
      }
    }
    let sortedArray: Movie[] = listArray.sort((n1,n2) => {
      if (n1.imdbRating < n2.imdbRating) {
          return 1;
      }
      if (n1.imdbRating > n2.imdbRating) {
          return -1;
      }
      return 0;
    });
    return sortedArray;
  }

}

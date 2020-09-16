import { Movie } from './../../dto/movie';
import { Component, OnInit, Input } from '@angular/core';

// export type Movie = { title: any, originalTitle: any, year: any, genres: any, releaseDate: any, storyline: any,  actors: any, imdbRating: any, posterurl: any};

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  selectedName: string = "";

  @Input() dataMoviesJson: any;

  @Input() searchWord: string;

  constructor() {
    this.movieTitle = "";
    this.ratingFilter = "All";
  }

  ngOnInit(): void {
  }

  showSelected(newMenu: string) {
    this.selectedName = newMenu;
    this.searchWord = "";
    this.movieTitle = "";
    this.ratingFilter = "All";
  }

  getGenre(){
      let mergingGenreArray: string[] = [];
      let uniqueGenreArray: string[] = [];
      for (let entry of this.dataMoviesJson) {
        const genreArray: string[] = entry.genres;
        mergingGenreArray = mergingGenreArray.concat(genreArray);
      }
      uniqueGenreArray = mergingGenreArray.filter(function(elem, index, self) {
        return index === self.indexOf(elem);
      })
      return uniqueGenreArray;
  }

  getList(){
    let listArray: Movie[] = [];
    for (let entry of this.dataMoviesJson) {
      if(entry.genres.includes(this.selectedName)){
        listArray.push(entry);
      }
    }
    return listArray;
  }

  getSearchList(){
    let listArray: Movie[] = [];
    let title: string;
    let anoTitle: string;
    let searchingWord: string;
    searchingWord = this.searchWord;
    searchingWord = searchingWord.toLowerCase().trim();
    if (searchingWord == "") {
      //Do nothing
    } else {
      for (let entry of this.dataMoviesJson) {
        title = entry.originalTitle;
        anoTitle = entry.title;
        title = title.toLowerCase().trim();
        anoTitle = anoTitle.toLowerCase().trim();
        if(title.includes(searchingWord)){
          listArray.push(entry);
        }else if(anoTitle.includes(searchingWord)){
          listArray.push(entry);
        }
      }
    }
    return listArray;
  }

  ratingFilter: string;

  newRating(value: string){
    this.ratingFilter = value;
  }

  getFilterList(option: string){
    let listArray: Movie[] = [];
    let optionArray: Movie[] = [];
    if (option == "General") {
      optionArray = this.getList();
    } else if (option == "Search") {
      optionArray = this.getSearchList();
    }
    if (this.ratingFilter == "All") {
      for (let entry of optionArray) {
        listArray.push(entry);
      }
    } else if (this.ratingFilter == ">= 8.5") {
      for (let entry of optionArray) {
        listArray = optionArray.filter(m => m.imdbRating >= 8.5 );
      }
    } else if (this.ratingFilter == "< 8.5") {
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

  movieTitle: string;
  releaseDate: string;

  movieDetails(movieTitle: string, relDate: string){
    this.movieTitle = movieTitle;
    this.releaseDate = relDate;
  }

  getMovieDetails(){
    let detailMovie: Movie[] = [];
    for (let entry of this.dataMoviesJson) {
      detailMovie = this.dataMoviesJson.filter(m => m.title == this.movieTitle && m.releaseDate == this.releaseDate);
    }
    console.log(detailMovie);
    return detailMovie;
  }

  updateMovieTitle(){
    this.movieTitle = "";
  }

}

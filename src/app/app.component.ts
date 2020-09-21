import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'movie-app';

  constructor() {
  }

  ngOnInit() {

  }

  public HeaderStatus = {searchMovie: "", isSearch: false, apiSelected: "", isAPISelected: false};
  searchMovie: string;
  isSearch: boolean;
  apiSelected: string;
  isAPISelected: boolean;

  changeHeader(data){
    this.HeaderStatus = data;
    this.searchMovie = this.HeaderStatus.searchMovie;
    this.isSearch = this.HeaderStatus.isSearch;
    // console.log(this.isSearch);
    this.apiSelected = this.HeaderStatus.apiSelected;
    this.isAPISelected = this.HeaderStatus.isAPISelected;
    console.log(this.apiSelected);
  }

}

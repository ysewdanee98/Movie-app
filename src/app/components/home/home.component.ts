import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public HeaderStatus = {searchMovie: "", isSearch: false, apiSelected: "", isAPISelected: false};
  // searchMovie: string;
  // isSearch: boolean;
  apiSelected: string;
  isAPISelected: boolean;

  changeHeader(data){
    this.HeaderStatus = data;
    // this.searchMovie = this.HeaderStatus.searchMovie;
    // this.isSearch = this.HeaderStatus.isSearch;
    // console.log(this.isSearch);
    this.apiSelected = this.HeaderStatus.apiSelected;
    this.isAPISelected = this.HeaderStatus.isAPISelected;
    console.log(this.apiSelected);
  }

}

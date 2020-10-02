import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isPopUp: boolean;

  constructor() {
    this.isPopUp = false;
  }

  ngOnInit(): void {

  }

  popUpToggle(){
    this.isPopUp = !this.isPopUp;
  }

  searchMovie: string;

  operationSearch(){
    if (this.searchMovie != "") {
      this.searchMovie = "";
    }
  }

}

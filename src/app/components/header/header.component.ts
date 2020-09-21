import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isPopUp: boolean;

  constructor() {
    this.isPopUp = false;
    // this.isSearch = false;
    this.isAPISelected = false;
  }

  ngOnInit(): void {

  }

  popUpToggle(){
    this.isPopUp = !this.isPopUp;
    // console.log(this.isPopUp);
  }

  searchMovie: string;
  @Input() isSearch: boolean;
  
  @Output() newHeaderEvent = new EventEmitter<{searchMovie: string, isSearch: boolean, apiSelected: string, isAPISelected:boolean}>();

  operationSearch(){
    if (this.searchMovie != "") {
      this.isSearch = true;
      // console.log(this.isSearch);
      this.newHeaderEvent.emit({searchMovie: this.searchMovie, isSearch: this.isSearch, apiSelected: "", isAPISelected: false});
      this.searchMovie = "";
    }
  }

  apiSelected: string;
  isAPISelected: boolean;

  getAPI(value: string){
    this.apiSelected = value;
    this.isAPISelected = true;
    this.newHeaderEvent.emit({searchMovie: "", isSearch: false, apiSelected: this.apiSelected, isAPISelected: this.isAPISelected});
    // console.log(this.apiSelected);
  }

}

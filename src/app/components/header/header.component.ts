import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  popup: boolean;

  searchWord: string;
  @Output() newSearchEvent = new EventEmitter<string>();


  constructor() {
    this.searchWord = "";
  }

  ngOnInit(): void {
  }

  popUpToggle(){
    this.popup = !this.popup;
  }

  operationSearch(){
    // console.log("Search button clicked!");
    // console.log(this.searchWord);
    this.newSearchEvent.emit(this.searchWord);
    this.searchWord = "";
  }

}

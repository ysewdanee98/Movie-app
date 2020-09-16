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
    this.newSearchEvent.emit(this.searchWord);
    this.searchWord = "";
  }

}

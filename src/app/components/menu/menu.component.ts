import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  nameSelected: string;

  @Output() newMenuEvent = new EventEmitter <string>();

  constructor() {
    this.nameSelected = "";
  }

  ngOnInit(): void {

  }

  chosen(clicked: string){
    this.nameSelected = clicked;
    this.newMenuEvent.emit(this.nameSelected);
  }

}

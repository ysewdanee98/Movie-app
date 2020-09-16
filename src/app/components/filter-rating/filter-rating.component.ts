import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-filter-rating',
  templateUrl: './filter-rating.component.html',
  styleUrls: ['./filter-rating.component.scss']
})
export class FilterRatingComponent implements OnInit {

  value: string;
  @Output() newRatingEvent = new EventEmitter<string>();
  btnSelected: string;

  @Input() ratingFilter: string;

  constructor() {
    this.value = "";
  }

  ngOnInit(): void { }

  getValue(value: string){
    this.value = value;
    this.newRatingEvent.emit(this.value);
    this.btnSelected = value;
  }

  update(){
    this.btnSelected = this.ratingFilter;
    console.log(this.btnSelected);
  }

}

import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  @Input() checked: boolean;
  @Output() checkChanged: EventEmitter<any>;

  constructor() {
    this.checkChanged = new EventEmitter<any>();
   }

  ngOnInit(): void {
    // console.log("Check box page");
  }

  toggleChecked(){
    this.checked = !this.checked;
    this.checkChanged.emit(this.checked);
    // console.log("Check box clicked");
  }

}

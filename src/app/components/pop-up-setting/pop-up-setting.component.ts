import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pop-up-setting',
  templateUrl: './pop-up-setting.component.html',
  styleUrls: ['./pop-up-setting.component.scss']
})
export class PopUpSettingComponent implements OnInit {

  @Input() isPopUpStatus: boolean;
  @Output() newPopUpEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  changePopUpStatus(){
    this.isPopUpStatus = false;
    this.newPopUpEvent.emit(this.isPopUpStatus);
    // console.log("Clicked on X");
  }

}

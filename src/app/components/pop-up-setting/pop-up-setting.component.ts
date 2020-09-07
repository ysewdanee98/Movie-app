import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pop-up-setting',
  templateUrl: './pop-up-setting.component.html',
  styleUrls: ['./pop-up-setting.component.scss']
})
export class PopUpSettingComponent implements OnInit {

  @Input() popUpStatus: boolean;
  @Output() newPopUpEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  ChangePopUpStatus(){
    this.popUpStatus = false;
    this.newPopUpEvent.emit(this.popUpStatus);
  }

}

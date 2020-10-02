import { AuthenticationService } from './../../providers/authentication.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-pop-up-setting',
  templateUrl: './pop-up-setting.component.html',
  styleUrls: ['./pop-up-setting.component.scss']
})
export class PopUpSettingComponent implements OnInit {

  @Input() isPopUpStatus: boolean;
  @Output() newPopUpEvent = new EventEmitter<boolean>();

  constructor(private authenticationService: AuthenticationService, public translate: TranslateService) { }

  ngOnInit(): void {
  }

  changePopUpStatus(){
    this.isPopUpStatus = false;
    this.newPopUpEvent.emit(this.isPopUpStatus);
  }

  logOut(){
    this.authenticationService.logout();
  }

}

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
    // console.log("Settings page");
  }

  changePopUpStatus(){
    this.isPopUpStatus = false;
    this.newPopUpEvent.emit(this.isPopUpStatus);
    // console.log("Settings close clicked");
  }

  logOut(){
    // console.log("Logout clicked");
    this.authenticationService.logout();
  }

}

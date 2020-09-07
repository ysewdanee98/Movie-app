import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpSettingComponent } from './pop-up-setting.component';

describe('PopUpSettingComponent', () => {
  let component: PopUpSettingComponent;
  let fixture: ComponentFixture<PopUpSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

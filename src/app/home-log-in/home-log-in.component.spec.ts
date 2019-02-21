import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLogInComponent } from './home-log-in.component';

describe('HomeLogInComponent', () => {
  let component: HomeLogInComponent;
  let fixture: ComponentFixture<HomeLogInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeLogInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

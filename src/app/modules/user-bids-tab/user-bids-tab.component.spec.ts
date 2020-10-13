import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBidsTabComponent } from './user-bids-tab.component';

describe('BidsTabComponent', () => {
  let component: UserBidsTabComponent;
  let fixture: ComponentFixture<UserBidsTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserBidsTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBidsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

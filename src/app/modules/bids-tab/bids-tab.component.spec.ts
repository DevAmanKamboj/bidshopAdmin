import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidsTabComponent } from './bids-tab.component';

describe('BidsTabComponent', () => {
  let component: BidsTabComponent;
  let fixture: ComponentFixture<BidsTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidsTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

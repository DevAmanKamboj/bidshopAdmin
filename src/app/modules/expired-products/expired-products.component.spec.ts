import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExpiredProductsComponent } from './expired-products.component';

describe('ExpiredProductsComponent', () => {
  let component: ExpiredProductsComponent;
  let fixture: ComponentFixture<ExpiredProductsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpiredProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpiredProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

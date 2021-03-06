import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ActiveProductsComponent } from './active-products.component';

describe('ActiveProductsComponent', () => {
  let component: ActiveProductsComponent;
  let fixture: ComponentFixture<ActiveProductsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinningProductsTabComponent } from './winning-products-tab.component';

describe('WinningProductsTabComponent', () => {
  let component: WinningProductsTabComponent;
  let fixture: ComponentFixture<WinningProductsTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinningProductsTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinningProductsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

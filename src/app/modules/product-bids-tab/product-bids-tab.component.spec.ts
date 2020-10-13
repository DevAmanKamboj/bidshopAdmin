import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBidsTabComponent } from './product-bids-tab.component';

describe('ProductBidsTabComponent', () => {
  let component: ProductBidsTabComponent;
  let fixture: ComponentFixture<ProductBidsTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductBidsTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductBidsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProductBidsTabComponent } from './product-bids-tab.component';

describe('ProductBidsTabComponent', () => {
  let component: ProductBidsTabComponent;
  let fixture: ComponentFixture<ProductBidsTabComponent>;

  beforeEach(waitForAsync(() => {
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

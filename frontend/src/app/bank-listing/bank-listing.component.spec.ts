import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankListingComponent } from './bank-listing.component';

describe('BankListingComponent', () => {
  let component: BankListingComponent;
  let fixture: ComponentFixture<BankListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

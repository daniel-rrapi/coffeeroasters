import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressCheckoutComponent } from './address-checkout.component';

describe('AddressCheckoutComponent', () => {
  let component: AddressCheckoutComponent;
  let fixture: ComponentFixture<AddressCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressCheckoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

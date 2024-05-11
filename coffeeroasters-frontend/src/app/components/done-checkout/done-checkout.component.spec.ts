import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneCheckoutComponent } from './done-checkout.component';

describe('DoneCheckoutComponent', () => {
  let component: DoneCheckoutComponent;
  let fixture: ComponentFixture<DoneCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoneCheckoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoneCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

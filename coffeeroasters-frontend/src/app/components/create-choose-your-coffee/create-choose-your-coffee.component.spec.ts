import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateChooseYourCoffeeComponent } from './create-choose-your-coffee.component';

describe('CreateChooseYourCoffeeComponent', () => {
  let component: CreateChooseYourCoffeeComponent;
  let fixture: ComponentFixture<CreateChooseYourCoffeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateChooseYourCoffeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateChooseYourCoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

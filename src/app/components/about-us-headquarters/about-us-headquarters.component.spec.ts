import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsHeadquartersComponent } from './about-us-headquarters.component';

describe('AboutUsHeadquartersComponent', () => {
  let component: AboutUsHeadquartersComponent;
  let fixture: ComponentFixture<AboutUsHeadquartersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUsHeadquartersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsHeadquartersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

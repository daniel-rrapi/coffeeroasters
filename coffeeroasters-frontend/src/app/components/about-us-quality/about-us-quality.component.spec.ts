import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsQualityComponent } from './about-us-quality.component';

describe('AboutUsQualityComponent', () => {
  let component: AboutUsQualityComponent;
  let fixture: ComponentFixture<AboutUsQualityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUsQualityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsQualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

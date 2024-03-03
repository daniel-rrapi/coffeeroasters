import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsOurCommitmentComponent } from './about-us-our-commitment.component';

describe('AboutUsOurCommitmentComponent', () => {
  let component: AboutUsOurCommitmentComponent;
  let fixture: ComponentFixture<AboutUsOurCommitmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUsOurCommitmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsOurCommitmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

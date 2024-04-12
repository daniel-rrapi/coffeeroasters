import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePlanBannerComponent } from './create-plan-banner.component';

describe('CreatePlanBannerComponent', () => {
  let component: CreatePlanBannerComponent;
  let fixture: ComponentFixture<CreatePlanBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePlanBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePlanBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

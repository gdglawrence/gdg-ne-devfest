import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorsBannerComponent } from './sponsors-banner.component';

describe('SponsorsBannerComponent', () => {
  let component: SponsorsBannerComponent;
  let fixture: ComponentFixture<SponsorsBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsorsBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

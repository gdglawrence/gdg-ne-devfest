import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GdgCovidBannerComponent } from './gdg-covid-banner.component';

describe('GdgCovidBannerComponent', () => {
  let component: GdgCovidBannerComponent;
  let fixture: ComponentFixture<GdgCovidBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GdgCovidBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GdgCovidBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

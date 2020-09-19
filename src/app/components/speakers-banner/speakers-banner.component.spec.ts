import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakersBannerComponent } from './speakers-banner.component';

describe('SpeakersBannerComponent', () => {
  let component: SpeakersBannerComponent;
  let fixture: ComponentFixture<SpeakersBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeakersBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakersBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

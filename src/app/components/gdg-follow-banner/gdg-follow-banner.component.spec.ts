import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GdgFollowBannerComponent } from './gdg-follow-banner.component';

describe('GdgFollowBannerComponent', () => {
  let component: GdgFollowBannerComponent;
  let fixture: ComponentFixture<GdgFollowBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GdgFollowBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GdgFollowBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

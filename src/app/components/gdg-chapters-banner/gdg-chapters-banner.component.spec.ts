import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GdgChaptersBannerComponent } from './gdg-chapters-banner.component';

describe('GdgChaptersBannerComponent', () => {
  let component: GdgChaptersBannerComponent;
  let fixture: ComponentFixture<GdgChaptersBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GdgChaptersBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GdgChaptersBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

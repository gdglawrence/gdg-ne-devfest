import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarDrawerComponent } from './navbar-drawer.component';

describe('NavbarDrawerComponent', () => {
  let component: NavbarDrawerComponent;
  let fixture: ComponentFixture<NavbarDrawerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarDrawerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

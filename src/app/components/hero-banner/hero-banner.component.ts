import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-hero-banner',
  templateUrl: './hero-banner.component.html',
  styleUrls: ['./hero-banner.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeroBannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

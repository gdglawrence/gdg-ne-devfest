import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-gdg-chapters-banner',
  templateUrl: './gdg-chapters-banner.component.html',
  styleUrls: ['./gdg-chapters-banner.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GdgChaptersBannerComponent implements OnInit {

  // TODO: dynamic, coming from somewhere
  gdgChapters = [
    { link: '', name: 'GDG Boston Android' },
    { link: '', name: 'GDG Bronx' },
    { link: '', name: 'GDG Capital Region' },
    { link: '', name: 'GDG Cloud NYC' },
    { link: '', name: 'GDG Cloud Philly' },
    { link: '', name: 'GDG CR' },
    { link: '', name: 'GDG Lawrence' },
    { link: '', name: 'GDG Manchester NH' },
    { link: '', name: 'GDG New Brunswick' },
    { link: '', name: 'GDG New Haven' },
    { link: '', name: 'GDG North New Jersey' },
    { link: '', name: 'GDG NYC' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

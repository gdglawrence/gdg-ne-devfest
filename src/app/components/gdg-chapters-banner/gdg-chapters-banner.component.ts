import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import eventInfoData from '../../data/eventInfo.json';

@Component({
  selector: 'app-gdg-chapters-banner',
  templateUrl: './gdg-chapters-banner.component.html',
  styleUrls: ['./gdg-chapters-banner.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GdgChaptersBannerComponent implements OnInit {

  // TODO: dynamic, coming from somewhere
  gdgChapters: any = eventInfoData.gdgChapters;

  constructor() { }

  ngOnInit(): void {
  }

}

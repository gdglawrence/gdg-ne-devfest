import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Speaker } from 'src/app/models/speaker';
import speakerData from '../../data/speakers.json';

@Component({
  selector: 'app-speakers-banner',
  templateUrl: './speakers-banner.component.html',
  styleUrls: ['./speakers-banner.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SpeakersBannerComponent implements OnInit {

  speakers: Speaker[] = speakerData;
  
  constructor() { }

  ngOnInit(): void {
  }

}

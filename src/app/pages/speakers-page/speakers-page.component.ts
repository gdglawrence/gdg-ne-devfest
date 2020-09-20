import { Component, OnInit } from '@angular/core';
import { Speaker } from '../../models/speaker';
import speakerData from '../../data/speakers.json';

@Component({
  selector: 'app-speakers-page',
  templateUrl: './speakers-page.component.html',
  styleUrls: ['./speakers-page.component.scss']
})
export class SpeakersPageComponent implements OnInit {

  speakers: Speaker [] = speakerData;

  constructor() { }

  ngOnInit(): void {
    console.log(speakerData);
  }
}

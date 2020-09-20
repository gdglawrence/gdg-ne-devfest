import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Speaker } from 'src/app/models/speaker';

@Component({
  selector: 'app-speaker-card',
  templateUrl: './speaker-card.component.html',
  styleUrls: ['./speaker-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SpeakerCardComponent implements OnInit {

  @Input() speaker: Speaker;

  constructor() { }

  ngOnInit(): void {
  }

}

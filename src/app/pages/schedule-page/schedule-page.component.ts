import { SimpleChanges } from '@angular/core';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Speaker } from 'src/app/models/speaker';
import schedule from '../../data/schedule.json';
import speakerData from '../../data/speakers.json';

@Component({
  selector: 'app-schedule-page',
  templateUrl: './schedule-page.component.html',
  styleUrls: ['./schedule-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SchedulePageComponent implements OnInit {

  speakers: Speaker [] = speakerData;
  schedule: any = schedule;

  constructor() {}

  ngOnInit(): void {
    this.processSchedule();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.processSchedule();
  }

  processSchedule() {
    schedule.sessions.forEach(session => {
      let foundSpeakers = [];
      session.speakerIds.forEach((speakerId) => {
        let foundSpeaker = this.speakers.find(s => s.id === speakerId);
        if (foundSpeaker) {
          foundSpeakers.push(foundSpeaker);
        }
      });

      let startTime = new Date(session.startTime);
      let endTime = new Date(session.endTime);
      let duration = ((endTime.getTime() - startTime.getTime()) / 1000) / 60;
      let durationInMinutes = Math.abs(Math.round(duration));

      if (durationInMinutes < 60) {
        session.duration = `${durationInMinutes} min.`;
      }
      else {
        let hourDuration = `${Math.round(Math.floor(durationInMinutes / 60))} hr.`;
        let minDuration = durationInMinutes % 60 > 0 ? `${durationInMinutes % 60} min.` : '';
        session.duration = `${hourDuration} ${minDuration}`;
      }
      
      session.speakers = foundSpeakers;
    });
  }

}

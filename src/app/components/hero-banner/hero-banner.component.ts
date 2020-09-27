import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import eventInfoData from '../../data/eventInfo.json';

@Component({
  selector: 'app-hero-banner',
  templateUrl: './hero-banner.component.html',
  styleUrls: ['./hero-banner.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeroBannerComponent implements OnInit {

  eventInfoData: any = eventInfoData;

  constructor() { }

  ngOnInit(): void {
  }

  onRSVP() {
    window.open(eventInfoData.registrationLink);
  }

  onSaveDateAction() {
    // TODO: let's make it configurable instead.
    let startDate = eventInfoData.googleCalStartDate;
    let endDate = eventInfoData.googleCalEndDate;
    let title = eventInfoData.title;
    let location = eventInfoData.location.description + ' - Register via Link Below';
    let details = eventInfoData.details;

    window.open(`http://www.google.com/calendar/event?action=TEMPLATE&dates=${startDate}/${endDate}&text=${title}&details=${details}&location=${location}`)
  }
}

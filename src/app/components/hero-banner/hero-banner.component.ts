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

  onSaveDateAction() {
    // TODO: let's make it configurable instead.
    let startDate = '20201031T140000Z';
    let endDate = '20201031T190000Z';
    let title = 'GDG NorthEast DevFest 2020';
    let location = 'Online Event - Stay Tuned for DevFest Link'
    let details = 'GDG NorthEast DevFest 2020 is here!. Join us for community-led, virtual sessions from Google Developers products and Communities leaders. Watch the keynote, learn from technical talks, and meet fellow local developers online.';

    window.open(`http://www.google.com/calendar/event?action=TEMPLATE&dates=${startDate}/${endDate}&text=${title}&details=${details}&location=${location}`)
  }
}

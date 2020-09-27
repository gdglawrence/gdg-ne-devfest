import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Sponsor } from '../../models/sponsor';
import sponsorsData from '../../data/sponsors.json';
@Component({
  selector: 'app-gdg-sponsors-banner',
  templateUrl: './sponsors-banner.component.html',
  styleUrls: ['./sponsors-banner.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SponsorsBannerComponent implements OnInit {

    // TODO: dynamic, coming from somewhere
    sponsors: Sponsor[] = sponsorsData;

    constructor() { }

    ngOnInit(): void {
    }

}

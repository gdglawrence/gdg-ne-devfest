import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-gdg-sponsors-banner',
  templateUrl: './sponsors-banner.component.html',
  styleUrls: ['./sponsors-banner.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SponsorsBannerComponent implements OnInit {

    // TODO: dynamic, coming from somewhere
    sponsors = [
      {
        name: 'Google',
        link: '',
        img:  './assets/imgs/sponsors/google.png'
      },
      {
        name: 'Google Developer Group',
        link: '',
        img:  './assets/imgs/sponsors/gdg.png'
      },
      {
        name: 'Women Techmakers',
        link: '',
        img:  './assets/imgs/sponsors/wtm.png'
      },
      {
        name: 'I Am Remarkable',
        link: '',
        img:  './assets/imgs/sponsors/iam.png'
      }
    ];

    constructor() { }

    ngOnInit(): void {
    }

}

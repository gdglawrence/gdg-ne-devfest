import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speakers-banner',
  templateUrl: './speakers-banner.component.html',
  styleUrls: ['./speakers-banner.component.scss']
})
export class SpeakersBannerComponent implements OnInit {

  speakers = [
    { 
      name: "Dan Sullivan",
      company: "Google Cloud",
      tech: "google_cloud",
      img: "dan_sullivan"
    },
    { 
      name: "Frank van Puffelen",
      company: "Firebase",
      tech: "firebase",
      img: "frank_van_puffelen"
    },
    { 
      name: "Sara Robinson",
      company: "AI / ML",
      tech: "ai_ml",
      img: "sara_robinson"
    },
    { 
      name: "Scott Stroll",
      company: "Flutter",
      tech: "flutter",
      img: "scott_stroll"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import * as aboutData from 'raw-loader!./../../data/about.md';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  constructor() { }

  aboutMarkdown : string = aboutData.default;

  ngOnInit(): void {
    console.log(this.aboutMarkdown);
  }
}

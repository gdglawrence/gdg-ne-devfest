import { Component, OnInit } from '@angular/core';
import { Organizers } from '../../models/organizers';
import organizersData from '../../data/organizers.json';
import organizingCommunityData from '../../data/organizingCommunity.json';

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.scss']
})
export class TeamPageComponent implements OnInit {

  organizers: Organizers [] = organizersData;
  organizingCommunity: Organizers [] = organizingCommunityData;

  constructor() { }

  ngOnInit(): void {
  }

}

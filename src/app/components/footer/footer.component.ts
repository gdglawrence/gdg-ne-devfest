import { Component, OnInit } from '@angular/core';
import { FooterData } from './../../models/footerData';
import footerData from '../../data/footer.json';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  footerData: FooterData = footerData;
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isDrawerOpened: boolean = false;

  @Output()
  drawerToggleEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  constructor() { }

  ngOnInit(): void {
  }

  onToggleNavDrawer(isDrawerOpen: boolean) {
    this.isDrawerOpened = isDrawerOpen;
    this.drawerToggleEmitter.emit(this.isDrawerOpened);
  }
}

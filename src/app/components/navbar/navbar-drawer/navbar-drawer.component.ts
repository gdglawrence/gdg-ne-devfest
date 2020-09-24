import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'navbar-drawer',
  templateUrl: './navbar-drawer.component.html',
  styleUrls: ['./navbar-drawer.component.scss']
})
export class NavbarDrawerComponent implements OnInit {
  @Input()
  @HostBinding('class.drawer-open')
  isDrawerOpened: boolean;

  @Output()
  drawerToggleEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  onNavLinkClicked($event: MouseEvent) {
    this.isDrawerOpened = false;
    this.drawerToggleEmitter.emit(this.isDrawerOpened);
  } 
}

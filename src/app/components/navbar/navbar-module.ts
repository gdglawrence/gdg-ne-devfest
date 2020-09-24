import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { NavbarDrawerComponent } from './navbar-drawer/navbar-drawer.component';

@NgModule({
    declarations: [
        NavbarComponent,
        NavbarDrawerComponent
    ],
    imports: [
      CommonModule,
      RouterModule
    ],
    exports: [
      NavbarComponent
    ]
  })
  export class NavbarModule { }
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SpeakersPageComponent } from './pages/speakers-page/speakers-page.component';

const routes: Routes = [{
  component: HomePageComponent,
  path: 'home'
},
{
  component: SpeakersPageComponent,
  path: 'speakers'
},
{
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';
import { GdgChaptersBannerComponent } from './components/gdg-chapters-banner/gdg-chapters-banner.component';
import { GdgFollowBannerComponent } from './components/gdg-follow-banner/gdg-follow-banner.component';
import { GdgCovidBannerComponent } from './components/gdg-covid-banner/gdg-covid-banner.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeroBannerComponent,
    GdgChaptersBannerComponent,
    GdgFollowBannerComponent,
    GdgCovidBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import { SpeakersBannerComponent } from './components/speakers-banner/speakers-banner.component';
import { SponsorsBannerComponent } from './components/sponsors-banner/sponsors-banner.component';
import { SpeakersPageComponent } from './pages/speakers-page/speakers-page.component';
import { SpeakerCardComponent } from './components/speaker-card/speaker-card.component';
import { FooterComponent } from './components/footer/footer.component'
import { NavbarModule } from './components/navbar/navbar-module';
import { SponsorsPageComponent } from './pages/sponsors-page/sponsors-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SchedulePageComponent } from './pages/schedule-page/schedule-page.component';
import { MarkedPipe } from './pipes/marked.pipe';
import { TeamPageComponent } from './pages/team-page/team-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeroBannerComponent,
    GdgChaptersBannerComponent,
    GdgFollowBannerComponent,
    GdgCovidBannerComponent,
    SpeakersBannerComponent,
    SpeakersPageComponent,
    SponsorsBannerComponent,
    SpeakerCardComponent,
    FooterComponent,
    SponsorsPageComponent,
    AboutPageComponent,
    SchedulePageComponent,
    MarkedPipe,
    TeamPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

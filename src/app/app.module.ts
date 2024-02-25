import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './views/navbar/navbar.component';
import { FooterComponent } from './views/footer/footer.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { HeroComponent } from './components/hero/hero.component';
import { OurCollectionComponent } from './components/our-collection/our-collection.component';
import { WhyChooseUsComponent } from './components/why-choose-us/why-choose-us.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LandingPageComponent,
    HeroComponent,
    OurCollectionComponent,
    WhyChooseUsComponent,
    HowItWorksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

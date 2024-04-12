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
import { AboutComponent } from './views/about/about.component';
import { AboutUsBannerComponent } from './components/about-us-banner/about-us-banner.component';
import { AboutUsOurCommitmentComponent } from './components/about-us-our-commitment/about-us-our-commitment.component';
import { AboutUsQualityComponent } from './components/about-us-quality/about-us-quality.component';
import { AboutUsHeadquartersComponent } from './components/about-us-headquarters/about-us-headquarters.component';
import { CreatePlanComponent } from './views/create-plan/create-plan.component';
import { CreatePlanBannerComponent } from './components/create-plan-banner/create-plan-banner.component';
import { CreateChooseYourCoffeeComponent } from './components/create-choose-your-coffee/create-choose-your-coffee.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LandingPageComponent,
    HeroComponent,
    OurCollectionComponent,
    WhyChooseUsComponent,
    HowItWorksComponent,
    AboutComponent,
    AboutUsBannerComponent,
    AboutUsOurCommitmentComponent,
    AboutUsQualityComponent,
    AboutUsHeadquartersComponent,
    CreatePlanComponent,
    CreatePlanBannerComponent,
    CreateChooseYourCoffeeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

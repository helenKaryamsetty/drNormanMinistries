import { Component } from '@angular/core';
import { ActionBannerComponent } from '../../components/action-banner.component';
import { HomeHeroComponent } from '../../components/home-hero.component';
import { HomeEventsSectionComponent } from '../../sections/home/home-events-section.component';
import { HomeImpactSectionComponent } from '../../sections/home/home-impact-section.component';
import { HomeMinistriesSectionComponent } from '../../sections/home/home-ministries-section.component';
import { HomeVisionSectionComponent } from '../../sections/home/home-vision-section.component';
import { MinistryLogoStripComponent } from '../../sections/home/ministry-logo-strip.component';
import { PhotoGallerySectionComponent } from '../../sections/home/photo-gallery-section.component';
import { SchoolOfFaithFeatureSectionComponent } from '../../sections/home/school-of-faith-feature-section.component';
import { MinistryStatsSectionComponent } from '../../sections/ministry-stats-section.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HomeHeroComponent, MinistryLogoStripComponent, HomeVisionSectionComponent, HomeMinistriesSectionComponent, SchoolOfFaithFeatureSectionComponent, HomeEventsSectionComponent, PhotoGallerySectionComponent, HomeImpactSectionComponent, MinistryStatsSectionComponent, ActionBannerComponent],
  template: `
    <app-home-hero />
    <app-ministry-logo-strip />
    <app-home-vision-section />
    <app-home-ministries-section />
    <app-school-of-faith-feature-section />
    <app-home-events-section />
    <app-photo-gallery-section />
    <app-home-impact-section />
    <app-ministry-stats-section eyebrow="Global impact" title="A ministry measured" accent="in generations." description="More than three decades of ministry, five connected mandates, and a church network serving six continents." />
    <app-action-banner eyebrow="Your next step starts here" title="There is a place" accent="for you." description="Find community, grow in faith, or partner with the work." primaryText="Find your community" primaryLink="/ministries" secondaryText="Partner with us" secondaryLink="/giving" />
  `
})
export class HomePageComponent {}
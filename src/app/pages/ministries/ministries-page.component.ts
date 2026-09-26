import { Component } from '@angular/core';
import { ActionBannerComponent } from '../../components/action-banner.component';
import { SitePageHeroComponent } from '../../components/site-page-hero.component';
import { MinistryCatalogSectionComponent } from '../../sections/ministry-catalog-section.component';
import { MinistryStatsSectionComponent } from '../../sections/ministry-stats-section.component';

@Component({
  selector: 'app-ministries-page',
  standalone: true,
  imports: [ActionBannerComponent, SitePageHeroComponent, MinistryCatalogSectionComponent, MinistryStatsSectionComponent],
  template: `
    <app-site-page-hero eyebrow="A family of ministries" title="One vision." accent="Many ways to grow." description="A connected ministry network for faith, leadership, education, and service." image="/assets/teaching-audience.webp" imageAlt="A community learning together" />
    <app-ministry-catalog-section />
    <app-ministry-stats-section eyebrow="Global impact" title="One vision." accent="Across generations." description="The published ministry profile describes more than three decades of ministry and a church network spanning six continents." />
    <app-action-banner eyebrow="Take the next step" title="Find room to grow" accent="with us." description="Discover a ministry, connect with a community, and keep building your faith." primaryText="See upcoming gatherings" primaryLink="/events" />
  `
})
export class MinistriesPageComponent {}
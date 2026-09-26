import { Component } from '@angular/core';
import { ActionBannerComponent } from '../../components/action-banner.component';
import { SitePageHeroComponent } from '../../components/site-page-hero.component';
import { EventsListSectionComponent } from '../../sections/events-list-section.component';

@Component({
  selector: 'app-events-page',
  standalone: true,
  imports: [ActionBannerComponent, SitePageHeroComponent, EventsListSectionComponent],
  template: `
    <app-site-page-hero eyebrow="Come together" title="Gatherings that" accent="move us forward." description="Make space for community, learning, and inspiration for the road ahead." image="/assets/church-speaking.webp" imageAlt="Dr. Norman speaking at a ministry gathering" />
    <app-events-list-section />
    <app-action-banner eyebrow="Speaking & booking" title="Bring Dr. Norman" accent="to your platform." description="Available for conferences, leadership summits, church anniversaries, and executive gatherings." primaryText="Send an inquiry" primaryHref="mailto:info@normanthomas.org" />
  `
})
export class EventsPageComponent {}
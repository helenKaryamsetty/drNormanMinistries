import { Component } from '@angular/core';
import { ActionBannerComponent } from '../../components/action-banner.component';
import { SitePageHeroComponent } from '../../components/site-page-hero.component';
import { ResourceLibrarySectionComponent } from '../../sections/resources/resource-library-section.component';

@Component({
  selector: 'app-resources-page',
  standalone: true,
  imports: [ActionBannerComponent, SitePageHeroComponent, ResourceLibrarySectionComponent],
  template: `
    <app-site-page-hero eyebrow="The resource library" title="Teaching for" accent="the life you're living." description="Thoughtful resources to help you study, reflect, and keep growing wherever you are." image="/assets/dr-norman-speaking.webp" imageAlt="Dr. Norman Thomas teaching" />
    <app-resource-library-section />
    <app-action-banner eyebrow="A growing collection" title="Keep the conversation" accent="going." description="Visit the teaching library for sermons, conversations, and the latest ministry resources." primaryText="Watch the latest teaching" primaryHref="https://www.youtube.com/@DrNormanThomas" />
  `
})
export class ResourcesPageComponent {}
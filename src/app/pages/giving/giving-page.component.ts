import { Component } from '@angular/core';
import { ActionBannerComponent } from '../../shared/ui/action-banner/action-banner.component';
import { SitePageHeroComponent } from '../../shared/ui/site-page-hero/site-page-hero.component';
import { GivingDetailsSectionComponent } from '../../sections/giving/giving-details-section.component';

@Component({
  selector: 'app-giving-page',
  standalone: true,
  imports: [ActionBannerComponent, SitePageHeroComponent, GivingDetailsSectionComponent],
  template: `
    <app-site-page-hero eyebrow="Partner with the vision" title="Generosity in" accent="good company." description="Your partnership sustains teaching, training, and outreach through Norman Thomas Ministries." image="/assets/lakeside.webp" imageAlt="A quiet lakeside landscape" />
    <app-giving-details-section />
    <app-action-banner eyebrow="Thank you for being here" title="Generosity makes" accent="community possible." description="We are grateful for your partnership, your prayers, and your care." primaryText="Contact the ministry" primaryHref="mailto:info@normanthomas.org" />
  `
})
export class GivingPageComponent {}
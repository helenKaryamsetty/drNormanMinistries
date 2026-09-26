import { Component } from '@angular/core';
import { SitePageHeroComponent } from '../../components/site-page-hero.component';
import { ChurchIntroSectionComponent } from '../../sections/about/church-intro-section.component';
import { LeadersSectionComponent } from '../../sections/about/leaders-section.component';
import { ValuesSectionComponent } from '../../sections/about/values-section.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [SitePageHeroComponent, ChurchIntroSectionComponent, LeadersSectionComponent, ValuesSectionComponent],
  template: `
    <app-site-page-hero eyebrow="The people behind the vision" title="Faith shaped by" accent="family and purpose." description="A lifetime of ministry built through teaching, community, and service." image="/assets/lakeside.webp" imageAlt="The lakeside community that inspires the ministry" />
    <app-church-intro-section />
    <app-leaders-section />
    <app-values-section />
  `
})
export class AboutPageComponent {}
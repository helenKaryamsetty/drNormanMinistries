import { Component } from '@angular/core';
import { SitePageHeroComponent } from '../../shared/ui/site-page-hero/site-page-hero.component';
import { ChurchIntroSectionComponent } from '../../sections/about/church-intro-section.component';
import { LeadersSectionComponent } from '../../sections/about/leaders-section.component';
import { ValuesSectionComponent } from '../../sections/about/values-section.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [SitePageHeroComponent, ChurchIntroSectionComponent, LeadersSectionComponent, ValuesSectionComponent],
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent {}
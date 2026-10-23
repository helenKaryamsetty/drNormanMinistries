import { Component } from '@angular/core';
import { ActionBannerComponent } from '../../shared/ui/action-banner/action-banner.component';
import { SitePageHeroComponent } from '../../shared/ui/site-page-hero/site-page-hero.component';
import { GivingDetailsSectionComponent } from '../../sections/giving/giving-details-section.component';

@Component({
  selector: 'app-giving-page',
  standalone: true,
  imports: [ActionBannerComponent, SitePageHeroComponent, GivingDetailsSectionComponent],
  templateUrl: './giving-page.component.html',
  styleUrls: ['./giving-page.component.scss']
})
export class GivingPageComponent {}
import { Component } from '@angular/core';
import { ActionBannerComponent } from '../../shared/ui/action-banner/action-banner.component';
import { SitePageHeroComponent } from '../../shared/ui/site-page-hero/site-page-hero.component';
import { MinistryCatalogSectionComponent } from '../../sections/ministries/ministry-catalog-section.component';
import { MinistryStatsSectionComponent } from '../../sections/ministries/ministry-stats-section.component';

@Component({
  selector: 'app-ministries-page',
  standalone: true,
  imports: [ActionBannerComponent, SitePageHeroComponent, MinistryCatalogSectionComponent, MinistryStatsSectionComponent],
  templateUrl: './ministries-page.component.html',
  styleUrls: ['./ministries-page.component.scss']
})
export class MinistriesPageComponent {}
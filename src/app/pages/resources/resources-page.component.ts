import { Component } from '@angular/core';
import { ActionBannerComponent } from '../../shared/ui/action-banner/action-banner.component';
import { SitePageHeroComponent } from '../../shared/ui/site-page-hero/site-page-hero.component';
import { ResourceLibrarySectionComponent } from '../../sections/resources/resource-library-section.component';

@Component({
  selector: 'app-resources-page',
  standalone: true,
  imports: [ActionBannerComponent, SitePageHeroComponent, ResourceLibrarySectionComponent],
  templateUrl: './resources-page.component.html',
  styleUrls: ['./resources-page.component.scss']
})
export class ResourcesPageComponent {}
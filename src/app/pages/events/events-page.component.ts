import { Component } from '@angular/core';
import { ActionBannerComponent } from '../../shared/ui/action-banner/action-banner.component';
import { SitePageHeroComponent } from '../../shared/ui/site-page-hero/site-page-hero.component';
import { EventsListSectionComponent } from '../../sections/events/events-list-section.component';

@Component({
  selector: 'app-events-page',
  standalone: true,
  imports: [ActionBannerComponent, SitePageHeroComponent, EventsListSectionComponent],
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.scss']
})
export class EventsPageComponent {}
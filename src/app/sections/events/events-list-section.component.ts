import { Component } from '@angular/core';
import { EventCardComponent, MinistryEvent } from '../../shared/ui/cards/event-card/event-card.component';
import { SectionHeadingComponent } from '../../shared/ui/section-heading/section-heading.component';

@Component({
  selector: 'app-events-list-section',
  standalone: true,
  imports: [EventCardComponent, SectionHeadingComponent],
  templateUrl: './events-list-section.component.html',
  styleUrls: ['./events-list-section.component.scss']
})
export class EventsListSectionComponent {
  events: MinistryEvent[] = [
    {
      title: 'Kingdom Entrepreneurs Summit',
      category: 'Marketplace · Leadership',
      date: 'See event listing for current details',
      location: 'Lake Charles, Louisiana',
      image: '/assets/ke-summit-light.webp',
      description: 'Faith and marketplace leaders gathering for a summit on Kingdom-minded enterprise.',
      href: 'https://www.eventbrite.com/e/kingdom-entrepreneurs-summit-tickets-676272438067'
    }
  ];
}
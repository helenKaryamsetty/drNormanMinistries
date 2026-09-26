import { Component } from '@angular/core';
import { EventCardComponent, MinistryEvent } from '../components/event-card.component';
import { SectionHeadingComponent } from '../components/section-heading.component';

@Component({
  selector: 'app-events-list-section',
  standalone: true,
  imports: [EventCardComponent, SectionHeadingComponent],
  template: `
    <section class="section site-width">
      <app-section-heading eyebrow="Speaking & booking" title="Gatherings with" accent="purpose." aside="Conferences, leadership summits, church anniversaries, and executive gatherings focused on leadership, legacy, and Kingdom excellence." />
      <div class="events-grid">
        @for (event of events; track event.title) { <app-event-card [event]="event" /> }
      </div>
    </section>
  `,
  styles: [':host { display: block; }']
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
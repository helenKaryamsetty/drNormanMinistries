import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventCardComponent, MinistryEvent } from '../../shared/ui/cards/event-card/event-card.component';
import { SectionHeadingComponent } from '../../shared/ui/section-heading/section-heading.component';
import { EventsService, CurrentEvent } from '../../core/services/events.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-events-list-section',
  standalone: true,
  imports: [CommonModule, EventCardComponent, SectionHeadingComponent],
  templateUrl: './events-list-section.component.html',
  styleUrls: ['./events-list-section.component.scss']
})
export class EventsListSectionComponent implements OnInit, OnDestroy {
  events: MinistryEvent[] = [];
  isLoadingEvents = false;
  private eventsSubscription?: Subscription;

  constructor(private eventsService: EventsService) {}

  ngOnInit(): void {
    this.loadPublishedEvents();
  }

  async loadPublishedEvents(): Promise<void> {
    this.isLoadingEvents = true;
    try {
      const publishedEvents = await this.eventsService.getPublishedEventsFromSupabase();
      // Convert CurrentEvent to MinistryEvent
      this.events = publishedEvents.map((event: CurrentEvent) => ({
        title: event.title,
        category: event.category || 'Upcoming Event',
        date: event.date ? `${event.date}${event.time ? ` at ${event.time}` : ''}` : 'See event for details',
        location: event.location || 'Contact for location',
        image: event.image || '/assets/event-default.webp',
        description: event.description || '',
        href: event.ctaLink || '#'
      }));
    } catch (error) {
      console.error('Error loading published events:', error);
      this.events = [];
    } finally {
      this.isLoadingEvents = false;
    }
  }

  ngOnDestroy(): void {
    this.eventsSubscription?.unsubscribe();
  }
}
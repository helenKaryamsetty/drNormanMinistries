import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface CurrentEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  time?: string;
  location?: string;
  image: string;
  imageAlt: string;
  ctaText?: string;
  ctaLink?: string;
}

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private currentEventsSubject = new BehaviorSubject<CurrentEvent[]>(this.getDefaultEvents());
  currentEvents$: Observable<CurrentEvent[]> = this.currentEventsSubject.asObservable();

  /**
   * Get default/fallback events
   */
  private getDefaultEvents(): CurrentEvent[] {
    return [
      {
        id: '1',
        title: 'Sunday Worship Service',
        description: 'Join us for our main Sunday worship service with spirit-filled worship and practical teaching from the Word.',
        date: 'Every Sunday',
        time: '9:30 AM',
        location: 'New Life Church, Lake Charles, LA',
        image: '/assets/church-speaking.webp',
        imageAlt: 'Sunday Worship Service at New Life Church',
        ctaText: 'Plan Your Visit',
        ctaLink: '#visit'
      },
      {
        id: '2',
        title: 'Kingdom Entrepreneurs Summit',
        description: 'A gathering of faith and marketplace leaders for teaching on kingdom-minded enterprise and business excellence.',
        date: 'Save the Date',
        time: '2026',
        location: 'Lake Charles, Louisiana',
        image: '/assets/teaching-audience.webp',
        imageAlt: 'Kingdom Entrepreneurs Summit',
        ctaText: 'Register on Eventbrite',
        ctaLink: 'https://www.eventbrite.com/e/kingdom-entrepreneurs-summit-tickets-676272438067'
      },
      {
        id: '3',
        title: 'School of Faith Classes',
        description: 'Bible institute classes for spiritual growth and deeper understanding of God\'s Word. Available on-site, online, and in prisons.',
        date: 'Every Sunday',
        time: '6:30 PM',
        location: 'New Life Church & Online',
        image: '/assets/teaching-audience.webp',
        imageAlt: 'School of Faith Classes',
        ctaText: 'Learn More',
        ctaLink: 'https://schooloffaithusa.org'
      },
      {
        id: '4',
        title: 'Corporate Prayer Meeting',
        description: 'Join the whole church family in seeking God together. A powerful time of intercession and connection.',
        date: 'Every Sunday',
        time: '5:30 PM',
        location: 'New Life Church, Lake Charles, LA',
        image: '/assets/dr-norman-speaking.webp',
        imageAlt: 'Corporate Prayer Meeting',
        ctaText: 'Join Us',
        ctaLink: '#visit'
      },
      {
        id: '5',
        title: 'Youth Life Groups',
        description: 'Discipleship and community for the next generation. Building faith and friendships together.',
        date: 'Every Sunday',
        time: '6:30 PM',
        location: 'New Life Church, Lake Charles, LA',
        image: '/assets/teaching-audience.webp',
        imageAlt: 'Youth Life Groups',
        ctaText: 'Get Involved',
        ctaLink: '#visit'
      }
    ];
  }

  /**
   * Get current events as a promise
   */
  getEvents(): Promise<CurrentEvent[]> {
    return new Promise((resolve) => {
      this.currentEvents$.subscribe((events) => {
        resolve(events);
      });
    });
  }

  /**
   * Replace the current event list, for example after loading it from an API.
   */
  setEvents(events: CurrentEvent[]): void {
    this.currentEventsSubject.next([...events]);
  }

  /**
   * Add a new event (for dynamic updates)
   */
  addEvent(event: CurrentEvent): void {
    const current = this.currentEventsSubject.value;
    this.currentEventsSubject.next([...current, event]);
  }

  /**
   * Remove an event by id
   */
  removeEvent(eventId: string): void {
    const current = this.currentEventsSubject.value;
    this.currentEventsSubject.next(current.filter((e) => e.id !== eventId));
  }

  /**
   * Update an event
   */
  updateEvent(eventId: string, updates: Partial<CurrentEvent>): void {
    const current = this.currentEventsSubject.value;
    this.currentEventsSubject.next(
      current.map((e) => (e.id === eventId ? { ...e, ...updates } : e))
    );
  }
}

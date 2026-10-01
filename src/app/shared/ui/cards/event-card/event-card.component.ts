import { Component, Input } from '@angular/core';

export interface MinistryEvent {
  title: string;
  category: string;
  date: string;
  location: string;
  image: string;
  description: string;
  href: string;
}

@Component({
  selector: 'app-event-card',
  standalone: true,
  template: `
    <article class="event-card">
      <div class="event-card-image">
        <img [src]="event.image" [alt]="event.title" />
        <span class="event-type">{{ event.category }}</span>
      </div>
      <div class="event-card-copy">
        <span class="event-date">{{ event.date }}</span>
        <h3>{{ event.title }}</h3>
        <p>{{ event.description }}</p>
        <div class="event-card-footer">
          <span>{{ event.location }}</span>
          <a class="card-arrow" [href]="event.href" target="_blank" rel="noreferrer" [attr.aria-label]="'Event details for ' + event.title">↗</a>
        </div>
      </div>
    </article>
  `,
  styles: [':host { display: block; }']
})
export class EventCardComponent {
  @Input() event: MinistryEvent = {
    title: '', category: '', date: '', location: '', image: '', description: '', href: ''
  };
}
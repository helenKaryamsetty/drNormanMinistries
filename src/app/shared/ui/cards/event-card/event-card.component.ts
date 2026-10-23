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
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent {
  @Input() event: MinistryEvent = {
    title: '', category: '', date: '', location: '', image: '', description: '', href: ''
  };
}
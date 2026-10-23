import { Component, Input } from '@angular/core';

export interface MinistryBook {
  title: string;
  category: string;
  description: string;
  image: string;
  pdf?: string;
  storeUrl?: string;
  amazonSearch?: string;
}

@Component({
  selector: 'app-book-card',
  standalone: true,
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent {
  @Input() book: MinistryBook = { title: '', category: '', description: '', image: '' };
}
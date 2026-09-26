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
  template: `
    <article class="book-card">
      @if (book.image && book.pdf) {
        <a class="book-cover" [href]="book.pdf" target="_blank" rel="noreferrer"><img [src]="book.image" [alt]="book.title + ' book cover'" /></a>
      } @else if (book.image) {
        <div class="book-cover"><img [src]="book.image" [alt]="book.title" /></div>
      } @else {
        <div class="book-feature-mark"><span>{{ book.title }}</span><small>Norman Thomas Ministries</small></div>
      }
      <div class="book-copy">
        <span class="eyebrow">{{ book.category }}</span>
        <h3>{{ book.title }}</h3>
        <p>{{ book.description }}</p>
        <div class="book-actions">
          @if (book.pdf) { <a class="text-link" [href]="book.pdf" target="_blank" rel="noreferrer">Read the free PDF <span>↗</span></a> }
          @if (book.storeUrl) { <a class="book-buy" [href]="book.storeUrl" target="_blank" rel="noreferrer">Visit ministry e-store ↗</a> }
          @if (book.amazonSearch) { <a class="book-buy" [href]="book.amazonSearch" target="_blank" rel="noreferrer">Search Amazon listings ↗</a> }
        </div>
      </div>
    </article>
  `,
  styles: [':host { display: block; }']
})
export class BookCardComponent {
  @Input() book: MinistryBook = { title: '', category: '', description: '', image: '' };
}
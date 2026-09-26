import { Component } from '@angular/core';
import { BookCardComponent, MinistryBook } from '../../components/book-card.component';
import { SectionHeadingComponent } from '../../components/section-heading.component';

@Component({
  selector: 'app-book-catalog-section',
  standalone: true,
  imports: [BookCardComponent, SectionHeadingComponent],
  template: `
    <section class="section site-width store-section">
      <app-section-heading eyebrow="Read, reflect, grow" title="Books for the" accent="journey." aside="Books and teaching resources by Dr. Norman Thomas. Complimentary downloads are available in the ministry library." />
      <div class="book-grid">
        @for (book of books; track book.title) { <app-book-card [book]="book" /> }
      </div>
      <p class="sample-note">Amazon links open retailer search results; check current availability with the seller.</p>
    </section>
  `,
  styles: [':host { display: block; }']
})
export class BookCatalogSectionComponent {
  books: MinistryBook[] = [
    {
      title: 'Think Abundance',
      category: 'Purpose · Stewardship',
      description: 'A featured title in the Norman Thomas Ministries e-store.',
      image: '',
      storeUrl: 'https://www.normanthomas.org/site_eng/conteudo/shop.asp'
    },
    {
      title: 'The Power of Focus',
      category: 'Focus · Purpose',
      description: 'A practical teaching on the discipline of focus and moving toward purpose with intention.',
      image: '/assets/book-power-of-focus.jpg',
      pdf: '/assets/the-power-of-focus.pdf',
      storeUrl: 'https://www.normanthomas.org/site_eng/conteudo/shop.asp',
      amazonSearch: 'https://www.amazon.com/s?k=The+Power+of+Focus+Norman+Thomas'
    },
    {
      title: 'Now That I Am Saved',
      category: 'New beginnings · Faith',
      description: 'A guide to the first steps of a life rooted in faith and a relationship with Christ.',
      image: '/assets/book-now-that-i-am-saved.jpg',
      pdf: '/assets/now-that-i-am-saved.pdf',
      storeUrl: 'https://www.normanthomas.org/site_eng/conteudo/shop.asp',
      amazonSearch: 'https://www.amazon.com/s?k=Now+That+I+Am+Saved+Norman+Thomas'
    }
  ];
}
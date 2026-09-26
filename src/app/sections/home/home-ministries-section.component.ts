import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MinistryCardData } from '../../components/ministry-card.component';
import { SectionHeadingComponent } from '../../components/section-heading.component';

@Component({
  selector: 'app-home-ministries-section',
  standalone: true,
  imports: [RouterLink, SectionHeadingComponent],
  template: `
    <section class="dark-band">
      <div class="site-width section">
        <app-section-heading eyebrow="The ministry family" title="Five mandates." accent="One vision." linkText="Explore all ministries" link="/ministries" [light]="true" />
        <div class="ministry-preview-grid">
          @for (ministry of ministries; track ministry.title; let index = $index) {
            @if (ministry.href) {
              <a class="ministry-preview" [href]="ministry.href" target="_blank" rel="noreferrer">
                <span class="preview-number">0{{ index + 1 }}</span><img [src]="ministry.image" [alt]="ministry.imageAlt" />
                <span class="preview-label">{{ ministry.category }}</span><h3>{{ ministry.title }}</h3><span class="card-arrow" aria-hidden="true">↗</span>
              </a>
            } @else {
              <a class="ministry-preview" routerLink="/ministries">
                <span class="preview-number">0{{ index + 1 }}</span><img [src]="ministry.image" [alt]="ministry.imageAlt" />
                <span class="preview-label">{{ ministry.category }}</span><h3>{{ ministry.title }}</h3><span class="card-arrow" aria-hidden="true">↗</span>
              </a>
            }
          }
        </div>
      </div>
    </section>
  `,
  styles: [':host { display: block; }']
})
export class HomeMinistriesSectionComponent {
  ministries: MinistryCardData[] = [
    { category: 'Global mission', title: 'New Life Church International', description: '', image: '/assets/share-nlc.webp', imageAlt: 'New Life Church International seal', linkText: 'Visit New Life Church', href: 'https://nlcinternational.org' },
    { category: 'Education', title: 'School of Faith', description: '', image: '/assets/sof-logo.webp', imageAlt: 'School of Faith Bible Institute seal', linkText: 'Explore the institute', href: 'https://schooloffaithusa.org' },
    { category: 'Apostolic alignment', title: 'International Kingdom Alliance', description: '', image: '/assets/ika-logo.webp', imageAlt: 'International Kingdom Alliance seal', linkText: 'Explore the alliance', href: 'https://internationalkingdomalliance.org' },
    { category: 'Young adults', title: 'Emerge', description: '', image: '/assets/emerge-logo.webp', imageAlt: 'Emerge seal', linkText: 'Explore Emerge' },
    { category: 'Marketplace', title: 'Kingdom Entrepreneurs', description: '', image: '/assets/ke-summit-dark.webp', imageAlt: 'Kingdom Entrepreneurs Summit mark', linkText: 'Explore the summit', href: 'https://www.eventbrite.com/e/kingdom-entrepreneurs-summit-tickets-676272438067' }
  ];
}
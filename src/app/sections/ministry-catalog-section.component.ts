import { Component } from '@angular/core';
import { MinistryCardComponent, MinistryCardData } from '../components/ministry-card.component';
import { SectionHeadingComponent } from '../components/section-heading.component';

@Component({
  selector: 'app-ministry-catalog-section',
  standalone: true,
  imports: [MinistryCardComponent, SectionHeadingComponent],
  template: `
    <section class="section site-width">
      <app-section-heading eyebrow="The NTM family" title="Room to grow," accent="right where you are." aside="A connected family of churches, training, and leadership communities, each with a distinct part to play." />
      <div class="ministry-cards">
        @for (ministry of ministries; track ministry.title) { <app-ministry-card [ministry]="ministry" /> }
      </div>
    </section>
  `,
  styles: [':host { display: block; }']
})
export class MinistryCatalogSectionComponent {
  ministries: MinistryCardData[] = [
    { category: 'Global mission · Church network', title: 'New Life Church International', description: 'A worldwide network of churches and ministry leaders advancing transformative faith across six continents.', image: '/assets/share-nlc.webp', imageAlt: 'New Life Church International seal', linkText: 'Visit New Life Church', href: 'https://nlcinternational.org' },
    { category: 'Women · Community', title: "Women's Ministry", description: 'A community for women to grow in faith, encourage one another, and serve with purpose.', image: '/assets/pastors-couple.webp', imageAlt: 'New Life Church community', linkText: 'Connect with New Life' },
    { category: 'Men · Leadership', title: "Men's Ministry", description: 'Equipping men to lead with integrity, strengthen their families, and serve their communities.', image: '/assets/dr-norman-portrait.webp', imageAlt: 'Dr. Norman Thomas', linkText: 'Connect with New Life' },
    { category: 'Youth · Next generation', title: 'Youth', description: 'A place for the next generation to build community, grow in faith, and discover their gifts.', image: '/assets/teaching-audience.webp', imageAlt: 'A community learning together', linkText: 'Connect with New Life' },
    { category: 'Education · Formation', title: 'School of Faith', description: "Premier theological training and leadership development for the architects of tomorrow's Kingdom mandate.", image: '/assets/sof-logo.webp', imageAlt: 'School of Faith Bible Institute seal', linkText: 'Visit School of Faith', href: 'https://schooloffaithusa.org', imageIsSeal: true },
    { category: 'Alignment · International', title: 'International Kingdom Alliance', description: 'Apostolic covering and strategic fellowship for five-fold leaders, executives, and marketplace visionaries.', image: '/assets/ika-logo.webp', imageAlt: 'International Kingdom Alliance seal', linkText: 'Explore the alliance', href: 'https://internationalkingdomalliance.org', imageIsSeal: true },
    { category: 'Young adults · Leadership', title: 'Emerge', description: 'A young-adults initiative raising up the next generation of Kingdom leaders.', image: '/assets/emerge-logo.webp', imageAlt: 'Emerge ministry seal', linkText: 'Explore Emerge', imageIsSeal: true },
    { category: 'Marketplace · Enterprise', title: 'Kingdom Entrepreneurs', description: 'Equipping faith-driven entrepreneurs and marketplace leaders to build Kingdom-minded enterprise.', image: '/assets/ke-summit-light.webp', imageAlt: 'Kingdom Entrepreneurs Summit', linkText: 'See the summit', href: 'https://www.eventbrite.com/e/kingdom-entrepreneurs-summit-tickets-676272438067' }
  ];
}
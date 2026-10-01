import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nlc-hero-section',
  standalone: true,
  template: `
    <section class="nlc-hero" aria-labelledby="nlc-title">
      <img class="nlc-hero-image" src="/assets/church-speaking.webp" alt="Dr. Norman Thomas speaking at New Life Church" fetchpriority="high">
      <div class="nlc-hero-shade"></div>
      <div class="nlc-hero-copy">
        <span class="nlc-eyebrow">Sunday Encounters — In-Person &amp; Online</span>
        <h1 id="nlc-title">New Life for <em>every generation.</em></h1>
        <p>A non-denominational church home in Lake Charles, Louisiana, built on discipleship, practical life-skill teaching from the Word, and real Christian fellowship — since 1999.</p>
        <div class="nlc-actions">
          <a class="nlc-button nlc-button-gold" href="#media">Watch Now</a>
          <a class="nlc-button nlc-button-outline" href="#visit">Plan Your Visit</a>
        </div>
      </div>
    </section>

    <section class="nlc-upcoming" aria-labelledby="upcoming-title">
      <div class="nlc-upcoming-heading">
        <div><span class="nlc-eyebrow">Coming up</span><h2 id="upcoming-title">Services &amp; <em>upcoming events</em></h2></div>
        <div class="nlc-carousel-controls">
          <button type="button" aria-label="Previous events" (click)="moveTrack(-1)">‹</button>
          <button type="button" aria-label="Next events" (click)="moveTrack(1)">›</button>
        </div>
      </div>
      <div #track class="nlc-upcoming-track" tabindex="0" role="region" aria-label="Services and upcoming events">
        @for (item of items; track item.title) {
          <a class="nlc-upcoming-card" [class.featured]="item.featured" [href]="item.href">
            <span class="nlc-upcoming-when">{{ item.when }}</span>
            <span class="nlc-upcoming-title">{{ item.title }}</span>
            <span class="nlc-upcoming-detail">{{ item.detail }}</span>
            <span class="nlc-upcoming-go">{{ item.action }} →</span>
          </a>
        }
      </div>
      <div class="nlc-swipe-note" aria-hidden="true">Scroll to explore</div>
    </section>
  `
})
export class NlcHeroSectionComponent {
  @ViewChild('track') track?: ElementRef<HTMLElement>;

  items = [
    { when: 'Featured event · 2026', title: 'Kingdom Entrepreneurs Summit', detail: 'A gathering of faith and marketplace leaders for teaching on kingdom-minded enterprise.', action: 'Tickets & details', href: 'https://www.eventbrite.com/e/kingdom-entrepreneurs-summit-tickets-676272438067', featured: true },
    { when: 'Every Sunday · 9:30 AM', title: 'Sunday Worship', detail: '9:30 AM in person & online — plus 8:30 AM PowerTalk & Soul-Care.', action: 'Plan your visit', href: '#visit', featured: false },
    { when: 'Sunday · 5:30 PM', title: 'Corporate Prayer', detail: 'The whole church gathering to seek God together before evening classes.', action: 'Plan your visit', href: '#visit', featured: false },
    { when: 'Sunday · 6:30 PM', title: 'School of Faith & Youth', detail: 'Bible institute classes and youth life groups for every generation.', action: 'Plan your visit', href: '#visit', featured: false },
    { when: 'Announcements', title: 'Special services & guest ministers', detail: "Revivals and guest ministers are announced here and on our Facebook page as they're scheduled.", action: 'Follow for updates', href: 'https://www.facebook.com/fbNLCIntl/', featured: false }
  ];

  moveTrack(direction: number): void {
    this.track?.nativeElement.scrollBy({ left: direction * 360, behavior: 'smooth' });
  }
}
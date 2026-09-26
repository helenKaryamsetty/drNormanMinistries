import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-events-section',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="section site-width upcoming-section">
      <div class="section-heading">
        <div><span class="eyebrow">Gather, learn, grow</span><h2>Make room for <em>what's next.</em></h2></div>
        <a class="text-link" routerLink="/events">All gatherings <span>↗</span></a>
      </div>
      <div class="event-feature">
        <div class="event-feature-image"><img src="/assets/ke-summit-light.webp" alt="Kingdom Entrepreneurs Summit" /></div>
        <div class="event-feature-copy">
          <span class="eyebrow">Featured gathering</span>
          <h3>Kingdom Entrepreneurs Summit</h3>
          <p>Faith and marketplace leaders gathering for a summit on Kingdom-minded enterprise.</p>
          <div class="event-meta"><span>Leadership · Marketplace</span><span>See the event listing for current details</span></div>
          <a class="button button-dark" href="https://www.eventbrite.com/e/kingdom-entrepreneurs-summit-tickets-676272438067" target="_blank" rel="noreferrer">View event details <span>↗</span></a>
        </div>
      </div>
    </section>
  `,
  styles: [':host { display: block; }']
})
export class HomeEventsSectionComponent {}
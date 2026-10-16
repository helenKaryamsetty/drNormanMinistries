import { Component } from '@angular/core';
import { NlcHeroCarouselComponent } from './nlc-hero-carousel.component';

@Component({
  selector: 'app-nlc-hero-section',
  standalone: true,
  imports: [NlcHeroCarouselComponent],
  template: `
    <section class="nlc-hero" aria-label="Welcome and upcoming events">
      <app-nlc-hero-carousel />
    </section>
  `
})
export class NlcHeroSectionComponent {}
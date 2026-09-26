import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-impact-section',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="impact-section">
      <div class="site-width impact-inner">
        <div class="impact-copy">
          <span class="eyebrow">A life of service</span>
          <h2>Rooted in faith. <em>Reaching the world.</em></h2>
          <p>Senior pastor and founder of New Life Church International and the School of Faith Bible Institute, Dr. Norman has devoted his life to teaching and developing leaders.</p>
          <a class="text-link" routerLink="/about">Learn about the vision <span>↗</span></a>
        </div>
        <div class="impact-image">
          <img src="/assets/dr-norman-speaking.webp" alt="Dr. Norman Thomas teaching" />
          <span class="impact-stamp">A legacy<br />of leadership</span>
        </div>
      </div>
    </section>
  `,
  styles: [':host { display: block; }']
})
export class HomeImpactSectionComponent {}
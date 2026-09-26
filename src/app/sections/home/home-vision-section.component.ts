import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-vision-section',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="section site-width intro-section">
      <div class="section-kicker"><span>01</span><span class="kicker-line"></span><span>The vision</span></div>
      <div class="intro-grid">
        <div><span class="eyebrow">Built on faith. Made for impact.</span><h2>Leadership that reaches <em>across generations.</em></h2></div>
        <div class="intro-copy">
          <p>With more than three decades of ministry, Dr. Norman Thomas, Jr. has become a trusted father to leaders. His mandate is to restore the excellence of the Kingdom through education, apostolic alignment, and spiritual mentorship across nations, generations, and spheres of influence.</p>
          <a class="text-link" routerLink="/about">Discover our story <span>↗</span></a>
        </div>
      </div>
    </section>
  `,
  styles: [':host { display: block; }']
})
export class HomeVisionSectionComponent {}
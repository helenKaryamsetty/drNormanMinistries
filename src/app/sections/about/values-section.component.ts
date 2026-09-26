import { Component } from '@angular/core';

@Component({
  selector: 'app-values-section',
  standalone: true,
  template: `
    <section class="section site-width about-values">
      <div><span class="eyebrow">The heart of the work</span><h2>Grow in wisdom.<br /><em>Lead with purpose.</em></h2></div>
      <div class="value-list">
        <div><span>01</span><div><h3>Unwavering faith</h3><p>Grounded in biblical truth, apostolic authority, and a generational commitment to the Gospel.</p></div></div>
        <div><span>02</span><div><h3>Kingdom leadership</h3><p>Equipping the next generation of spiritual leaders to serve with conviction and excellence.</p></div></div>
        <div><span>03</span><div><h3>Enduring legacy</h3><p>Building institutions, families, and ministries that outlast their founders.</p></div></div>
      </div>
    </section>
  `,
  styles: [':host { display: block; }']
})
export class ValuesSectionComponent {}
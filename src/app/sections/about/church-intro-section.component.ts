import { Component } from '@angular/core';

@Component({
  selector: 'app-church-intro-section',
  standalone: true,
  template: `
    <section class="section site-width about-church">
      <div class="about-photo">
        <img src="/assets/church-speaking.webp" alt="Dr. Norman Thomas ministering at New Life Church" />
        <span class="photo-caption">New Life Church International · Lake Charles, Louisiana</span>
      </div>
      <div class="about-copy">
        <span class="eyebrow">A home for faith</span>
        <h2>New Life <em>Church.</em></h2>
        <p>New Life Church International is a church and ministry network based in Lake Charles, Louisiana, with affiliate programs in cities and nations around the world.</p>
        <p>Its work centers on transformative faith, spiritual growth, and developing leaders for service in their communities.</p>
        <a class="text-link" href="https://nlcinternational.org" target="_blank" rel="noreferrer">Visit New Life Church International <span>↗</span></a>
      </div>
    </section>
  `,
  styles: [':host { display: block; }']
})
export class ChurchIntroSectionComponent {}
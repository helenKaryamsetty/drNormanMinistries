import { Component } from '@angular/core';
import { SectionHeadingComponent } from '../../components/section-heading.component';

@Component({
  selector: 'app-photo-gallery-section',
  standalone: true,
  imports: [SectionHeadingComponent],
  template: `
    <section class="gallery-band">
      <div class="site-width section">
        <app-section-heading eyebrow="Life in the ministry" title="Faith is lived" accent="together." linkText="See where we're gathering" link="/events" [light]="true" />
        <div class="gallery-grid">
          <img class="gallery-large" src="/assets/teaching-audience.webp" alt="A community gathered for teaching" />
          <img src="/assets/church-speaking.webp" alt="Dr. Norman speaking to a church community" />
          <img src="/assets/pastors-couple.webp" alt="Dr. Norman and Dr. Debbie Thomas" />
        </div>
      </div>
    </section>
  `,
  styles: [':host { display: block; }']
})
export class PhotoGallerySectionComponent {}
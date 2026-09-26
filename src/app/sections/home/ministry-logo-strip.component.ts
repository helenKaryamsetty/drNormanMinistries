import { Component } from '@angular/core';

@Component({
  selector: 'app-ministry-logo-strip',
  standalone: true,
  template: `
    <section class="partner-strip">
      <div class="site-width partner-inner">
        <span class="eyebrow">Five mandates. One vision.</span>
        <div class="partner-logos">
          <img src="/assets/share-nlc.webp" alt="New Life Church International" />
          <img src="/assets/sof-logo.webp" alt="School of Faith Bible Institute" />
          <img src="/assets/ika-logo.webp" alt="International Kingdom Alliance" />
          <img src="/assets/emerge-logo.webp" alt="Emerge" />
          <img src="/assets/ke-summit-dark.webp" alt="Kingdom Entrepreneurs" />
        </div>
      </div>
    </section>
  `,
  styles: [':host { display: block; }']
})
export class MinistryLogoStripComponent {}
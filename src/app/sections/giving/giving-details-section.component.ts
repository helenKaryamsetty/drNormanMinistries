import { Component } from '@angular/core';
import { GivingQrCardComponent } from './giving-qr-card.component';

@Component({
  selector: 'app-giving-details-section',
  standalone: true,
  imports: [GivingQrCardComponent],
  template: `
    <section class="section site-width giving-layout">
      <div class="giving-copy">
        <span class="eyebrow">Partner with the vision</span>
        <h2>Generosity in <em>good company.</em></h2>
        <p>Your partnership fuels the ministries, training, and outreach advancing the Kingdom through Dr. Norman Thomas and the Norman Thomas Ministries network.</p>
        <div class="giving-detail">
          <span>01</span>
          <div><h3>United States giving</h3><p>Giving from the United States. The current partner-giving destination is pending confirmation.</p><a class="text-link" href="mailto:info@normanthomas.org">Request giving details <span>↗</span></a></div>
        </div>
        <div class="giving-detail">
          <span>02</span>
          <div><h3>Where your gift goes</h3><p>Support ministry training, leadership development, church communities, and outreach through the NTM family.</p></div>
        </div>
      </div>
      <app-giving-qr-card />
    </section>
  `,
  styles: [':host { display: block; }']
})
export class GivingDetailsSectionComponent {}
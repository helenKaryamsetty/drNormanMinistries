import { Component } from '@angular/core';

@Component({
  selector: 'app-giving-qr-card',
  standalone: true,
  template: `
    <aside class="giving-panel">
      <span class="eyebrow">A note of thanks</span>
      <div class="qr-placeholder" aria-label="Giving QR code placeholder">
        <div class="qr-mark"><i></i><i></i><i></i></div>
        <span>GIVING QR</span>
        <small>Coming soon</small>
      </div>
      <h3>Give with confidence.</h3>
      <p>The live reference currently lists its partner-giving link as pending. Confirmed giving details will be added here.</p>
      <a class="text-link" href="mailto:info@normanthomas.org">Questions about giving? <span>↗</span></a>
    </aside>
  `,
  styles: [':host { display: block; }']
})
export class GivingQrCardComponent {}
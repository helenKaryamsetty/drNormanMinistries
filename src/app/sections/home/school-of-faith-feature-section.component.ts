import { Component } from '@angular/core';

@Component({
  selector: 'app-school-of-faith-feature-section',
  standalone: true,
  template: `
    <section class="sof-feature">
      <div class="site-width sof-feature-inner">
        <div class="sof-feature-copy">
          <span class="eyebrow">The institute</span>
          <h2>Where ministry <em>meets rigor.</em></h2>
          <p>School of Faith USA is an independently accredited pathway for believers who want more than a certificate. Foundational, intermediate, and advanced tracks are built to form leaders, on campus or online.</p>
          <a class="button button-dark" href="https://schooloffaithusa.org" target="_blank" rel="noreferrer">Explore School of Faith <span>↗</span></a>
          <p class="sof-program-note">The Louisiana Department of Corrections certifies School of Faith as a “good time” program. Eligible incarcerated graduates receive six months off their time served.</p>
        </div>
        <div class="sof-feature-seal">
          <img src="/assets/sof-logo.webp" alt="School of Faith Bible Institute seal" />
          <span>School of Faith USA</span>
          <small>Learn · Grow · Lead</small>
        </div>
      </div>
    </section>
  `,
  styles: [':host { display: block; }']
})
export class SchoolOfFaithFeatureSectionComponent {}
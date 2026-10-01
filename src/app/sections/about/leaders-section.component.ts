import { Component } from '@angular/core';
import { LeaderCardComponent } from '../../shared/ui/cards/leader-card/leader-card.component';
import { SectionHeadingComponent } from '../../shared/ui/section-heading/section-heading.component';

@Component({
  selector: 'app-leaders-section',
  standalone: true,
  imports: [LeaderCardComponent, SectionHeadingComponent],
  template: `
    <section class="leaders-band">
      <div class="site-width section">
        <app-section-heading eyebrow="Meet the leaders" title="A shared heart" accent="for people." aside="A life of ministry shaped by teaching, mentorship, and service." [light]="true" />
        <div class="leaders-grid">
          <app-leader-card image="/assets/dr-norman-portrait.webp" imageAlt="Portrait of Dr. Norman Thomas" role="Senior pastor · Founder" name="Dr. Norman Thomas, Jr." />
          <app-leader-card image="/assets/pastors-couple.webp" imageAlt="Dr. Debbie Thomas with Dr. Norman Thomas" role="Pastor · Ministry leader" name="Dr. Debbie Thomas" />
        </div>
      </div>
    </section>
  `,
  styles: [':host { display: block; }']
})
export class LeadersSectionComponent {}
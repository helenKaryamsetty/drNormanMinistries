import { Component } from '@angular/core';
import { NlcCommunitySectionComponent } from './sections/nlc-community-section.component';
import { NlcGatheringsSectionComponent } from './sections/nlc-gatherings-section.component';
import { NlcHeroSectionComponent } from './sections/nlc-hero-section.component';
import { NlcStorySectionComponent } from './sections/nlc-story-section.component';

@Component({
  selector: 'app-nlc-page',
  standalone: true,
  imports: [
    NlcCommunitySectionComponent,
    NlcGatheringsSectionComponent,
    NlcHeroSectionComponent,
    NlcStorySectionComponent
  ],
  template: `
    <div class="nlc-site" id="top">
      <app-nlc-hero-section />
      <section class="nlc-mission" aria-labelledby="nlc-mission-title">
        <p>“It is our desire to promote the Kingdom of God in the earth. We have a passion to teach people the principles of God's Word, regardless of one's race, color, ethnic background, or denominational affiliation. We believe that God transcends all borders and barriers.”</p>
        <span id="nlc-mission-title" class="nlc-eyebrow">Our Mission</span>
      </section>
      <app-nlc-story-section />
      <app-nlc-gatherings-section />
      <app-nlc-community-section />
    </div>
  `
})
export class NewLifePageComponent {}

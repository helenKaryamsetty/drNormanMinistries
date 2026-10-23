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
  templateUrl: './new-life-page.component.html',
  styleUrls: ['./new-life-page.component.scss']
})
export class NewLifePageComponent {}

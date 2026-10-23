import { Component } from '@angular/core';
import { HeroSectionComponent } from '../../sections/home/hero/hero-section.component';
import { PartnershipSectionComponent } from '../../sections/home/partnership/partnership-section.component';
import { VisionarySectionComponent } from '../../sections/home/visionary/visionary-section.component';
import { MinistriesSectionComponent } from '../../sections/home/ministries/ministries-section.component';
import { SchoolOfFaithSectionComponent } from '../../sections/home/school-of-faith/school-of-faith-section.component';
import { SpeakingSectionComponent } from '../../sections/home/speaking/speaking-section.component';
import { ResourcesSectionComponent } from '../../sections/home/resources/resources-section.component';
import { GlobalImpactSectionComponent } from '../../sections/home/global-impact/global-impact-section.component';
import { OrgContextService } from '../../core/services/org-context.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HeroSectionComponent,
    PartnershipSectionComponent,
    VisionarySectionComponent,
    MinistriesSectionComponent,
    SchoolOfFaithSectionComponent,
    SpeakingSectionComponent,
    ResourcesSectionComponent,
    GlobalImpactSectionComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  constructor(readonly orgContext: OrgContextService) {}
}
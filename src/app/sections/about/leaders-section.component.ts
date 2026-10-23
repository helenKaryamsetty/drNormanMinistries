import { Component } from '@angular/core';
import { LeaderCardComponent } from '../../shared/ui/cards/leader-card/leader-card.component';
import { SectionHeadingComponent } from '../../shared/ui/section-heading/section-heading.component';

@Component({
  selector: 'app-leaders-section',
  standalone: true,
  imports: [LeaderCardComponent, SectionHeadingComponent],
  templateUrl: './leaders-section.component.html',
  styleUrls: ['./leaders-section.component.scss']
})
export class LeadersSectionComponent {}
import { Component, Input } from '@angular/core';

export interface MinistryStat {
  value: string;
  label: string;
}

@Component({
  selector: 'app-ministry-stats-section',
  standalone: true,
  templateUrl: './ministry-stats-section.component.html',
  styleUrls: ['./ministry-stats-section.component.scss']
})
export class MinistryStatsSectionComponent {
  @Input() eyebrow = 'A legacy in motion';
  @Input() title = 'A ministry measured';
  @Input() accent = 'in generations.';
  @Input() description = 'Rooted in local community and connected across nations.';
  @Input() stats: MinistryStat[] = [
    { value: '30+', label: 'Years of ministry' },
    { value: '5', label: 'Ministry mandates' },
    { value: '6', label: 'Continents reached' }
  ];
}
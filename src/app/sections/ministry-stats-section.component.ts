import { Component, Input } from '@angular/core';

export interface MinistryStat {
  value: string;
  label: string;
}

@Component({
  selector: 'app-ministry-stats-section',
  standalone: true,
  template: `
    <section class="stats-band">
      <div class="site-width stats-inner">
        <div>
          <span class="eyebrow eyebrow-light">{{ eyebrow }}</span>
          <h2>{{ title }} <em>{{ accent }}</em></h2>
          <p>{{ description }}</p>
        </div>
        <div class="stat-list">
          @for (stat of stats; track stat.label) {
            <div><strong>{{ stat.value }}</strong><span>{{ stat.label }}</span></div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [':host { display: block; }']
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
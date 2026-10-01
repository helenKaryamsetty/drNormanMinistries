import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-leader-card',
  standalone: true,
  template: `
    <article class="leader-card">
      <img [src]="image" [alt]="imageAlt" />
      <div class="leader-caption">
        <span class="eyebrow eyebrow-light">{{ role }}</span>
        <h3>{{ name }}</h3>
      </div>
    </article>
  `,
  styles: [':host { display: block; }']
})
export class LeaderCardComponent {
  @Input() image = '';
  @Input() imageAlt = '';
  @Input() role = '';
  @Input() name = '';
}
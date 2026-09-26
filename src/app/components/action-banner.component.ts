import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-action-banner',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="closing-cta">
      <div class="site-width closing-inner">
        <span class="eyebrow eyebrow-light">{{ eyebrow }}</span>
        <h2>{{ title }} <em>{{ accent }}</em></h2>
        <p>{{ description }}</p>
        <div class="hero-actions">
          @if (primaryHref) {
            <a class="button button-gold" [href]="primaryHref" target="_blank" rel="noreferrer">{{ primaryText }} <span>↗</span></a>
          } @else {
            <a class="button button-gold" [routerLink]="primaryLink">{{ primaryText }} <span>↗</span></a>
          }
          @if (secondaryText && secondaryLink) {
            <a class="button button-outline" [routerLink]="secondaryLink">{{ secondaryText }} <span>→</span></a>
          }
        </div>
      </div>
    </section>
  `,
  styles: [':host { display: block; }']
})
export class ActionBannerComponent {
  @Input() eyebrow = '';
  @Input() title = '';
  @Input() accent = '';
  @Input() description = '';
  @Input() primaryText = '';
  @Input() primaryLink = '/';
  @Input() primaryHref = '';
  @Input() secondaryText = '';
  @Input() secondaryLink = '';
}
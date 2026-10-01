import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-site-page-hero',
  standalone: true,
  template: `
    <section class="page-hero">
      <div class="site-width page-hero-inner">
        <span class="eyebrow eyebrow-light">{{ eyebrow }}</span>
        <h1>{{ title }}<br /><em>{{ accent }}</em></h1>
        <p>{{ description }}</p>
      </div>
      <img [src]="image" [alt]="imageAlt" />
    </section>
  `,
  styles: [':host { display: block; }']
})
export class SitePageHeroComponent {
  @Input() eyebrow = '';
  @Input() title = '';
  @Input() accent = '';
  @Input() description = '';
  @Input() image = '';
  @Input() imageAlt = '';
}
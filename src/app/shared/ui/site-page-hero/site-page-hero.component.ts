import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-site-page-hero',
  standalone: true,
  templateUrl: './site-page-hero.component.html',
  styleUrls: ['./site-page-hero.component.scss']
})
export class SitePageHeroComponent {
  @Input() eyebrow = '';
  @Input() title = '';
  @Input() accent = '';
  @Input() description = '';
  @Input() image = '';
  @Input() imageAlt = '';
}
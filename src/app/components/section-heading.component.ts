import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-section-heading',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="section-heading">
      <div>
        <span class="eyebrow" [class.eyebrow-light]="light">{{ eyebrow }}</span>
        <h2>{{ title }} <em>{{ accent }}</em></h2>
      </div>
      @if (aside) { <p class="heading-aside" [class.heading-aside-light]="light">{{ aside }}</p> }
      @if (linkText && link) { <a class="text-link" [class.text-link-light]="light" [routerLink]="link">{{ linkText }} <span>↗</span></a> }
    </div>
  `,
  styles: [':host { display: block; }']
})
export class SectionHeadingComponent {
  @Input() eyebrow = '';
  @Input() title = '';
  @Input() accent = '';
  @Input() aside = '';
  @Input() linkText = '';
  @Input() link = '';
  @Input() light = false;
}
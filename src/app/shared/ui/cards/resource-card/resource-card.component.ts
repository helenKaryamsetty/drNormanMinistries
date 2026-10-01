import { Component, Input } from '@angular/core';

export interface MinistryResource {
  number: string;
  type: string;
  eyebrow: string;
  title: string;
  description: string;
  icon: string;
  links: { label: string; href: string }[];
  comingSoon?: boolean;
}

@Component({
  selector: 'app-resource-card',
  standalone: true,
  template: `
    <article class="resource-card" [class.resource-card-gold]="resource.comingSoon">
      <span class="resource-count">{{ resource.number }} / {{ resource.type }}</span>
      <div class="resource-icon">{{ resource.icon }}</div>
      <span class="eyebrow">{{ resource.eyebrow }}</span>
      <h3>{{ resource.title }}</h3>
      <p>{{ resource.description }}</p>
      @if (resource.comingSoon) {
        <span class="resource-status">Printable set coming soon</span>
      } @else {
        @for (link of resource.links; track link.href) {
          <a class="text-link" [href]="link.href" target="_blank" rel="noreferrer">{{ link.label }} <span>↗</span></a>
        }
      }
    </article>
  `,
  styles: [':host { display: block; }']
})
export class ResourceCardComponent {
  @Input() resource: MinistryResource = {
    number: '', type: '', eyebrow: '', title: '', description: '', icon: '', links: []
  };
}
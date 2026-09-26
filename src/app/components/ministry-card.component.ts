import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface MinistryCardData {
  category: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  linkText: string;
  href?: string;
  imageIsSeal?: boolean;
}

@Component({
  selector: 'app-ministry-card',
  standalone: true,
  imports: [RouterLink],
  template: `
    <article class="ministry-card">
      <div class="ministry-card-image" [class.ministry-seal]="ministry.imageIsSeal">
        <img [src]="ministry.image" [alt]="ministry.imageAlt" />
      </div>
      <div class="ministry-card-copy">
        <span class="eyebrow">{{ ministry.category }}</span>
        <h3>{{ ministry.title }}</h3>
        <p>{{ ministry.description }}</p>
        @if (ministry.href) {
          <a class="text-link" [href]="ministry.href" target="_blank" rel="noreferrer">{{ ministry.linkText }} <span>↗</span></a>
        } @else {
          <a class="text-link" routerLink="/ministries">{{ ministry.linkText }} <span>↗</span></a>
        }
      </div>
    </article>
  `,
  styles: [':host { display: block; }']
})
export class MinistryCardComponent {
  @Input() ministry: MinistryCardData = {
    category: '', title: '', description: '', image: '', imageAlt: '', linkText: ''
  };
}
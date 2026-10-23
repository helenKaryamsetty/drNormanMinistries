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
  templateUrl: './resource-card.component.html',
  styleUrls: ['./resource-card.component.scss']
})
export class ResourceCardComponent {
  @Input() resource: MinistryResource = {
    number: '', type: '', eyebrow: '', title: '', description: '', icon: '', links: []
  };
}
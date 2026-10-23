import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface MinistryCardData {
  category: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  linkText: string;
  route?: string;
  href?: string;
  imageIsSeal?: boolean;
}

@Component({
  selector: 'app-ministry-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './ministry-card.component.html',
  styleUrls: ['./ministry-card.component.scss']
})
export class MinistryCardComponent {
  @Input() ministry: MinistryCardData = {
    category: '', title: '', description: '', image: '', imageAlt: '', linkText: ''
  };
}
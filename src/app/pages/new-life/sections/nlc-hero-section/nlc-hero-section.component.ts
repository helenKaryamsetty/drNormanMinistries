import { Component } from '@angular/core';
import { NlcHeroCarouselComponent } from '../nlc-hero-carousel/nlc-hero-carousel.component';

@Component({
  selector: 'app-nlc-hero-section',
  standalone: true,
  imports: [NlcHeroCarouselComponent],
  templateUrl: './nlc-hero-section.component.html',
  styleUrls: ['./nlc-hero-section.component.scss']
})
export class NlcHeroSectionComponent {}
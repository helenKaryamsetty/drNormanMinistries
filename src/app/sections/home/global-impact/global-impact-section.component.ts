import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-global-impact-section',
  standalone: true,
  imports: [NgFor],
  templateUrl: './global-impact-section.component.html',
  styleUrls: ['./global-impact-section.component.scss']
})
export class GlobalImpactSectionComponent {
  stats = [
    { number: '30+', label: 'Years of Ministry' },
    { number: '42', label: 'Nations Reached' },
    { number: '12K', label: 'Leaders Mentored' },
    { number: '200+', label: 'Partner Churches' }
  ];

  testimonials = [
    {
      quote: 'Dr. Norman\'s mentorship reshaped the architecture of our ministry. We came for guidance and left with a mandate.',
      author: 'Bishop A. Okonkwo',
      role: 'Senior Pastor, Lagos'
    },
    {
      quote: 'His teaching marries scholarship with spiritual authority — a rare and necessary combination for this hour.',
      author: 'Dr. Helena Marsh',
      role: 'President, Continental Faith Network'
    },
    {
      quote: 'There is a fatherhood in his leadership that produces sons and daughters, not just followers.',
      author: 'Pastor J. Rivera',
      role: "School of Faith USA, '22"
    }
  ];
}

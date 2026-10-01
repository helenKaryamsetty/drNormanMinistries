import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-visionary-section',
  standalone: true,
  imports: [NgFor],
  templateUrl: './visionary-section.component.html',
  styleUrls: ['./visionary-section.component.scss']
})
export class VisionarySectionComponent {
  pillars = [
    {
      number: '01',
      title: 'Unwavering Faith',
      description: 'Grounded in biblical truth, apostolic authority, and a generational commitment to the Gospel.'
    },
    {
      number: '02',
      title: 'Kingdom Leadership',
      description: 'Equipping the next generation of spiritual architects to lead with conviction and excellence.'
    },
    {
      number: '03',
      title: 'Enduring Legacy',
      description: 'Building institutions, families, and ministries that outlast their founders.'
    }
  ];
}

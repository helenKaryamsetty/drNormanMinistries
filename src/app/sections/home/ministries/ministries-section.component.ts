import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-ministries-section',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './ministries-section.component.html',
  styleUrls: ['./ministries-section.component.scss']
})
export class MinistriesSectionComponent {
  ministries = [
    {
      id: 'nlc',
      category: 'Global Mission',
      name: 'NLC International',
      shortName: 'NLC',
      description: 'A worldwide network of churches and ministry leaders advancing the message of transformative faith across six continents.',
      image: '',
      imageAlt: '',
      color: 'nlc'
    },
    {
      id: 'sof',
      category: 'Education',
      name: 'School of Faith USA',
      shortName: 'SOF',
      description: "Premier theological training and leadership development for the architects of tomorrow's Kingdom mandate.",
      image: '/assets/sof-logo.webp',
      imageAlt: 'School of Faith Bible Institute seal',
      color: 'sof'
    },
    {
      id: 'ika',
      category: 'Alignment',
      name: 'International Kingdom Alliance',
      shortName: 'IKA',
      description: 'Apostolic covering and strategic fellowship for five-fold leaders, executives, and marketplace visionaries.',
      image: '/assets/ika-logo.webp',
      imageAlt: 'International Kingdom Alliance seal',
      color: 'ika'
    },
    {
      id: 'emerge',
      category: 'Young Adults',
      name: 'Emerge',
      shortName: 'Emerge',
      description: 'A young-adults initiative raising up the next generation of Kingdom leaders.',
      image: '/assets/emerge-logo.webp',
      imageAlt: 'Emerge ministry seal',
      color: 'emerge'
    },
    {
      id: 'ke',
      category: 'Marketplace',
      name: 'Kingdom Entrepreneurs',
      shortName: 'KE',
      description: 'Equipping faith-driven entrepreneurs and marketplace leaders to build kingdom-minded enterprise.',
      image: '/assets/ke-summit-light.webp',
      imageAlt: 'Kingdom Entrepreneurs Summit',
      color: 'ke'
    }
  ];

  getMinistryLink(ministryId: string): string {
    const links: { [key: string]: string } = {
      'nlc': '/new-life',
      'sof': 'https://schooloffaithusa.org',
      'ika': 'https://internationalkingdomalliance.org',
      'emerge': 'https://drnormanthomas.netlify.app/emerge.html',
      'ke': 'https://www.eventbrite.com/e/kingdom-entrepreneurs-summit-tickets-676272438067'
    };
    return links[ministryId] || '#';
  }
}

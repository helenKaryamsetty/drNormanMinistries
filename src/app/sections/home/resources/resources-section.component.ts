import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-resources-section',
  standalone: true,
  imports: [NgFor],
  templateUrl: './resources-section.component.html',
  styleUrls: ['./resources-section.component.scss']
})
export class ResourcesSectionComponent {
  resources = [
    {
      id: 'sermons',
      title: 'Full Sermon Library',
      category: 'Sermons',
      description: 'Watch on YouTube',
      href: 'https://www.youtube.com/@DrNormanThomas',
      image: ''
    },
    {
      id: 'podcast',
      title: 'New Life Podcast with Dr. Norman Thomas',
      category: 'Podcast',
      description: 'Listen on Apple Podcasts',
      href: 'https://podcasts.apple.com/us/podcast/new-life-podcast-with-dr-normanthomas/id1239523888',
      image: ''
    },
    {
      id: 'book',
      title: 'The Power of Focus',
      category: 'Book',
      description: 'Available in the E-Store',
      href: 'https://www.normanthomas.org/site_eng/conteudo/shop.asp',
      image: '/assets/book-power-of-focus.jpg'
    }
  ];
}

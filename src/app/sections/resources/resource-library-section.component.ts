import { Component } from '@angular/core';
import { ResourceCardComponent, MinistryResource } from '../../components/resource-card.component';
import { SectionHeadingComponent } from '../../components/section-heading.component';

@Component({
  selector: 'app-resource-library-section',
  standalone: true,
  imports: [ResourceCardComponent, SectionHeadingComponent],
  template: `
    <section class="section site-width resources-section">
      <app-section-heading eyebrow="Read, study, share" title="A library for" accent="every season." aside="Download a book, study the notes, or revisit teaching at your own pace." />
      <div class="resource-grid">
        @for (resource of resources; track resource.title) { <app-resource-card [resource]="resource" /> }
      </div>
    </section>
  `,
  styles: [':host { display: block; }']
})
export class ResourceLibrarySectionComponent {
  resources: MinistryResource[] = [
    { number: '01', type: 'Print & share', eyebrow: 'Put truth in reach', title: 'Confession Cards', description: 'Printable, scripture-rooted declarations for reflection and daily faith.', icon: '01', links: [], comingSoon: true },
    { number: '02', type: 'Read', eyebrow: 'Complimentary books', title: 'Free Books', description: 'Start with a practical guide to faith or explore focus and purpose.', icon: 'PDF', links: [{ label: 'Now That I Am Saved', href: '/assets/now-that-i-am-saved.pdf' }, { label: 'The Power of Focus', href: '/assets/the-power-of-focus.pdf' }] },
    { number: '03', type: 'Study', eyebrow: 'Notes & downloads', title: 'Study Notes', description: 'Go deeper with a downloadable note from the ministry teaching library.', icon: 'PDF', links: [{ label: 'The Case for Abundance', href: '/assets/study-notes/the-case-for-abundance.pdf' }] },
    { number: '04', type: 'Listen', eyebrow: 'Teaching & conversation', title: 'Other Resources', description: 'Find sermons, conversations, and ongoing teaching from Dr. Norman Thomas.', icon: '▶', links: [{ label: 'Watch on YouTube', href: 'https://www.youtube.com/@DrNormanThomas' }, { label: 'Listen to the podcast', href: 'https://podcasts.apple.com/us/podcast/new-life-podcast-with-dr-normanthomas/id1239523888' }] }
  ];
}
import { Component } from '@angular/core';
import { ActionBannerComponent } from '../../components/action-banner.component';
import { SitePageHeroComponent } from '../../components/site-page-hero.component';
import { BookCatalogSectionComponent } from '../../sections/store/book-catalog-section.component';

@Component({
  selector: 'app-store-page',
  standalone: true,
  imports: [ActionBannerComponent, SitePageHeroComponent, BookCatalogSectionComponent],
  template: `
    <app-site-page-hero eyebrow="The ministry bookshop" title="Wisdom to carry" accent="with you." description="Books and teaching from Dr. Norman Thomas for your next season of growth." image="/assets/dr-norman-studio.webp" imageAlt="Dr. Norman Thomas in the studio" />
    <app-book-catalog-section />
    <app-action-banner eyebrow="Keep learning" title="More to explore" accent="for free." description="Find complimentary books, study notes, and teaching in the resource library." primaryText="Visit the resource library" primaryLink="/resources" />
  `
})
export class StorePageComponent {}
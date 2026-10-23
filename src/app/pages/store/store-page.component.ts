import { Component } from '@angular/core';
import { ActionBannerComponent } from '../../shared/ui/action-banner/action-banner.component';
import { SitePageHeroComponent } from '../../shared/ui/site-page-hero/site-page-hero.component';
import { BookCatalogSectionComponent } from '../../sections/store/book-catalog-section.component';

@Component({
  selector: 'app-store-page',
  standalone: true,
  imports: [ActionBannerComponent, SitePageHeroComponent, BookCatalogSectionComponent],
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.scss']
})
export class StorePageComponent {}
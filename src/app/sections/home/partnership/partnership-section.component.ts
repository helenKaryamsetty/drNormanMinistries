import { Component } from '@angular/core';

@Component({
  selector: 'app-partnership-section',
  standalone: true,
  templateUrl: './partnership-section.component.html',
  styleUrls: ['./partnership-section.component.scss']
})
export class PartnershipSectionComponent {
  selectedRegion: 'usa' | 'za' = 'usa';

  regionData = {
    usa: {
      title: 'Giving from the United States.',
      link: 'Become a Monthly Partner'
    },
    za: {
      title: 'Giving from South Africa.',
      link: 'Partner Giving Link — Pending'
    }
  };

  get currentRegionData() {
    return this.regionData[this.selectedRegion];
  }

  toggleRegion(region: 'usa' | 'za') {
    this.selectedRegion = region;
  }
}

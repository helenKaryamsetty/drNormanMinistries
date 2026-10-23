import { Component } from '@angular/core';
import { GivingQrCardComponent } from './giving-qr-card.component';

@Component({
  selector: 'app-giving-details-section',
  standalone: true,
  imports: [GivingQrCardComponent],
  templateUrl: './giving-details-section.component.html',
  styleUrls: ['./giving-details-section.component.scss']
})
export class GivingDetailsSectionComponent {}
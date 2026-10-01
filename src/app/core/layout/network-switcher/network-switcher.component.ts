import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ECOSYSTEM_LINKS } from '../../../config/ecosystem/ecosystem-links';
import { OrgContextService } from '../../services/org-context.service';

@Component({
  selector: 'app-network-switcher',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './network-switcher.component.html',
  styleUrls: ['./network-switcher.component.scss']
})
export class NetworkSwitcherComponent {
  readonly links = ECOSYSTEM_LINKS;

  constructor(readonly orgContext: OrgContextService) {}
}

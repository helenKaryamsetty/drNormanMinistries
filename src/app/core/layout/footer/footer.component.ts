import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OrgContextService } from '../../services/org-context.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  constructor(readonly orgContext: OrgContextService) {}
}

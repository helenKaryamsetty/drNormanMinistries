import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NetworkSwitcherComponent } from './core/layout/network-switcher/network-switcher.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { OrgContextService } from './core/services/org-context.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NetworkSwitcherComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(readonly orgContext: OrgContextService) {}
}

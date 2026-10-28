import { Component, HostListener } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { OrgContextService } from '../../services/org-context.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isScrolled = false;
  mobileMenuOpen = false;
  adminMenuOpen = false;

  constructor(readonly orgContext: OrgContextService, private router: Router) {}

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.isScrolled = window.scrollY > 40;
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }

  toggleAdminMenu() {
    this.adminMenuOpen = !this.adminMenuOpen;
  }

  closeAdminMenu() {
    this.adminMenuOpen = false;
  }

  navigateToAdmin() {
    this.closeAdminMenu();
    this.router.navigate(['/admin/login']);
  }
}

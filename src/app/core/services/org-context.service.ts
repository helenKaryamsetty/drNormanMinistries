import { Injectable, computed, signal } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Organization } from '../models/organization.model';
import { ORGANIZATIONS, DEFAULT_ORGANIZATION_ID } from '../../config/organizations';

/** Resolves and exposes the Organization config for the currently-active route. */
@Injectable({ providedIn: 'root' })
export class OrgContextService {
  private readonly orgId = signal(DEFAULT_ORGANIZATION_ID);

  readonly currentOrg = computed<Organization>(() => ORGANIZATIONS[this.orgId()] ?? ORGANIZATIONS[DEFAULT_ORGANIZATION_ID]);

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.orgId.set(this.resolveOrgIdFromRoute());
    });
    // Resolve once for the initial page load (before the first NavigationEnd fires).
    this.orgId.set(this.resolveOrgIdFromRoute());
  }

  private resolveOrgIdFromRoute(): string {
    let route = this.route.root;
    let orgId = DEFAULT_ORGANIZATION_ID;
    while (route.firstChild) {
      route = route.firstChild;
      if (route.snapshot.data['orgId']) {
        orgId = route.snapshot.data['orgId'];
      }
    }
    return orgId;
  }
}

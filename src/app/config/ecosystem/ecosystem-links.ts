import { EcosystemLink } from '../../core/models/organization.model';

/** Cross-site navigation shown in the top network switcher bar on every organization's pages. */
export const ECOSYSTEM_LINKS: EcosystemLink[] = [
  { id: 'ntm', label: 'NormanThomas.org', routerLink: '/' },
  { id: 'nlc', label: 'New Life Church', routerLink: '/new-life' },
  { id: 'school-of-faith', label: 'School of Faith', href: 'https://schooloffaithusa.org' },
  { id: 'kingdom-alliance', label: 'Kingdom Alliance', href: 'https://internationalkingdomalliance.org' },
  { id: 'emerge', label: 'Emerge', href: 'https://drnormanthomas.netlify.app/emerge.html' },
  {
    id: 'kingdom-entrepreneurs',
    label: 'Kingdom Entrepreneurs',
    href: 'https://www.eventbrite.com/e/kingdom-entrepreneurs-summit-tickets-676272438067'
  }
];

import { Organization } from '../../core/models/organization.model';

export const NTM_ORG: Organization = {
  id: 'ntm',
  name: 'Dr. Norman Thomas Ministries',
  domain: 'normanthomas.org',

  headerVariant: 'standard',
  footerVariant: 'standard',
  logoUrl: '/assets/ntm-logo.webp',

  nav: [
    { label: 'The Visionary', fragment: 'visionary' },
    { label: 'Ministries', fragment: 'ministries' },
    { label: 'Resources', fragment: 'resources' },
    { label: 'Speaking', fragment: 'speaking' },
    { label: 'E-Store', href: 'https://www.normanthomas.org/site_eng/conteudo/shop.asp', external: true }
  ],
  headerCta: { label: 'Partner', fragment: 'partner', cta: true },

  contact: {
    phone: '(337) 433-1111',
    phoneHref: '+13374331111',
    email: 'info@normanthomas.org',
    address: '3000 East Gauthier Road, Lake Charles, LA 70607'
  },
  social: [
    { label: 'Facebook', url: 'https://www.facebook.com/NormanThomasMinistries/', icon: 'facebook' },
    { label: 'Instagram', url: 'https://www.instagram.com/newlife.international/', icon: 'instagram' },
    { label: 'Twitter / X', url: 'https://twitter.com/NLCIntl', icon: 'twitter' },
    { label: 'YouTube', url: 'https://www.youtube.com/@DrNormanThomas', icon: 'youtube' }
  ],

  logoColumnText:
    'Equipping the modern believer with ancient wisdom for global impact — a ministry dedicated to excellence in every sphere of influence.',
  showNewsletter: true,
  footerNewsletterTitle: 'Monthly Vision Brief',
  footerNewsletterText:
    'Receive apostolic insight, teaching announcements, and global ministry updates from Dr. Norman.',
  footerColumns: [
    {
      title: 'The Ecosystem',
      links: [
        { label: 'NLC International', routerLink: '/new-life' },
        { label: 'School of Faith USA', href: 'https://schooloffaithusa.org', external: true },
        { label: 'Kingdom Alliance', href: 'https://internationalkingdomalliance.org', external: true },
        { label: 'Media Library', fragment: 'resources' },
        { label: 'Study Notes', href: '/assets/study-notes/' },
        { label: 'E-Store', href: 'https://www.normanthomas.org/site_eng/conteudo/shop.asp', external: true },
        { label: 'Speaking Requests', fragment: 'speaking' }
      ]
    }
  ],
  footerBottomLinks: [
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
    { label: 'Contact', fragment: 'speaking' }
  ],
  copyrightText: 'Dr. Norman Thomas Ministries · NormanThomas.org',

  homeSections: [
    'hero',
    'partnership',
    'visionary',
    'ministries',
    'school-of-faith',
    'speaking',
    'resources',
    'global-impact'
  ]
};

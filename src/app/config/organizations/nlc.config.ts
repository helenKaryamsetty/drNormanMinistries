import { Organization } from '../../core/models/organization.model';

export const NLC_ORG: Organization = {
  id: 'nlc',
  name: "New Life Church International",
  domain: 'nlcinternational.org',

  headerVariant: 'banner',
  footerVariant: 'banner',
  brandName: 'New Life',
  brandAccent: "Church Int'l",
  brandTagline: 'NLCInternational.org',

  nav: [
    { label: 'Home', fragment: 'top' },
    { label: 'About', fragment: 'about' },
    { label: 'Visit', fragment: 'visit' },
    { label: 'Ministries', fragment: 'ministries' },
    { label: 'Events', fragment: 'events' },
    { label: 'Media', fragment: 'media' },
    { label: 'Prayer', fragment: 'prayer' },
    { label: 'Give', fragment: 'give' },
    { label: 'Contact', fragment: 'contact' }
  ],
  watchLink: { label: 'Watch', fragment: 'media' },

  contact: {
    phone: '+1 (337) 433-1111',
    phoneHref: '+13374331111',
    addressLines: ['3000 East Gauthier Road', 'Lake Charles, LA 70607']
  },
  social: [
    { label: 'Facebook', url: 'https://www.facebook.com/fbNLCIntl/', icon: 'facebook' },
    { label: 'YouTube', url: 'https://www.youtube.com/@DrNormanThomas', icon: 'youtube' }
  ],

  footerContactTitle: 'New Life Church International',
  footerColumns: [
    {
      title: 'Sister Ministries',
      links: [
        { label: 'School of Faith USA', href: 'https://schooloffaithusa.org', external: true },
        { label: 'International Kingdom Alliance', href: 'https://internationalkingdomalliance.org', external: true },
        { label: 'Emerge', href: 'https://drnormanthomas.netlify.app/emerge.html', external: true },
        {
          label: 'Kingdom Entrepreneurs',
          href: 'https://www.eventbrite.com/e/kingdom-entrepreneurs-summit-tickets-676272438067',
          external: true
        }
      ]
    },
    {
      title: 'Follow',
      links: [
        { label: 'Facebook', href: 'https://www.facebook.com/fbNLCIntl/', external: true },
        { label: 'YouTube', href: 'https://www.youtube.com/@DrNormanThomas', external: true },
        {
          label: 'New Life Podcast',
          href: 'https://podcasts.apple.com/us/podcast/new-life-podcast-with-dr-normanthomas/id1239523888',
          external: true
        }
      ]
    }
  ],
  copyrightText: "New Life Church International — part of the Norman Thomas Ministries network."
};

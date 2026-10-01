/** A navigable link used in headers, footers, and ecosystem navigation. */
export interface NavLink {
  label: string;
  /** Angular route path, e.g. '/giving'. */
  routerLink?: string;
  /** In-page anchor name (rendered as href="#name"). */
  fragment?: string;
  /** Absolute/external URL. */
  href?: string;
  external?: boolean;
  cta?: boolean;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: 'facebook' | 'instagram' | 'twitter' | 'youtube';
}

export interface FooterColumn {
  title: string;
  links: NavLink[];
}

export interface OrganizationContact {
  phone?: string;
  /** tel: href value, e.g. "+13374331111" (phone is the display text). */
  phoneHref?: string;
  email?: string;
  address?: string;
  /** Use when the address should render across multiple lines. */
  addressLines?: string[];
}

/** An entry in the cross-site ecosystem/network switcher bar. */
export interface EcosystemLink {
  /** Matches Organization.id for internal sites so the active link can be highlighted. */
  id: string;
  label: string;
  routerLink?: string;
  href?: string;
}

export type HeaderVariant = 'standard' | 'banner';
export type FooterVariant = 'standard' | 'banner';

/** Keys for the reusable home-page sections registered in HomePageComponent. */
export type HomeSectionKey =
  | 'hero'
  | 'partnership'
  | 'visionary'
  | 'ministries'
  | 'school-of-faith'
  | 'speaking'
  | 'resources'
  | 'global-impact';

/** Everything the shared layout/UI components need to render a specific organization's site. */
export interface Organization {
  id: string;
  name: string;
  domain: string;

  headerVariant: HeaderVariant;
  footerVariant: FooterVariant;

  /** Standard header: brand logo image. Banner header: omitted. */
  logoUrl?: string;
  /** Banner header: primary brand text, e.g. "New Life". */
  brandName?: string;
  /** Banner header: italic accent text, e.g. "Church Int'l". */
  brandAccent?: string;
  /** Banner header: small caption under the brand, e.g. "NLCInternational.org". */
  brandTagline?: string;

  nav: NavLink[];
  headerCta?: NavLink;
  /** Banner header only: the "Watch" style link shown on the right. */
  watchLink?: NavLink;

  contact: OrganizationContact;
  social: SocialLink[];

  /** Standard footer only. */
  logoColumnText?: string;
  showNewsletter?: boolean;
  footerNewsletterTitle?: string;
  footerNewsletterText?: string;
  footerBottomLinks?: NavLink[];

  /** Banner footer only: title for the first (brand/contact) column. */
  footerContactTitle?: string;

  footerColumns: FooterColumn[];
  copyrightText: string;

  /** Which home-page sections this organization uses, and in what order. Only relevant for orgs using the shared HomePageComponent. */
  homeSections?: HomeSectionKey[];
}

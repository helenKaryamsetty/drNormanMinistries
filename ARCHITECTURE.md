# Architecture

Multi-organization Angular app (standalone components, Angular 18). One codebase serves
multiple ministry sites (currently **NTM** and **New Life Church Int'l**) by composing
shared layout/UI components with per-organization configuration, instead of duplicating
pages per org.

```
core/
  models/
    organization.model.ts    Organization, NavLink, SocialLink, FooterColumn,
                              EcosystemLink, HomeSectionKey — the config contract
  services/
    org-context.service.ts   Resolves the active Organization from the route's
                              `data.orgId`, exposes it as a signal: `currentOrg()`
  layout/
    header/           header.component.ts/html/scss   2 variants: 'standard' (NTM) / 'banner' (NLC)
    footer/           footer.component.ts/html/scss    2 variants: 'standard' / 'banner'
    network-switcher/ network-switcher.component.ts/html/scss   Cross-site ecosystem nav bar

config/
  organizations/
    ntm.config.ts            Organization object for Dr. Norman Thomas Ministries
    nlc.config.ts            Organization object for New Life Church Int'l
    index.ts                 ORGANIZATIONS registry (id -> Organization) + default id
  ecosystem/
    ecosystem-links.ts       Links shown in the network-switcher bar

shared/
  ui/
    cards/
      ministry-card/, event-card/, leader-card/, book-card/, resource-card/
    action-banner/
    section-heading/
    site-page-hero/          Generic page-header used by about/ministries/events/giving/etc.

sections/                    Page-section components (one "slab" of a page), grouped by page
  home/
    hero/, partnership/, visionary/, ministries/, school-of-faith/, speaking/,
    resources/, global-impact/     (the 8 sections HomePageComponent can compose)
  about/        church-intro-section, leaders-section, values-section
  events/       events-list-section
  ministries/   ministry-catalog-section, ministry-stats-section
  giving/       giving-details-section, giving-qr-card
  resources/    resource-library-section
  store/        book-catalog-section

pages/                       Route-level components — compose hero + sections (+ banner)
  home/           home-page.component.ts     Sections driven by org.homeSections (ordered list)
  about/, ministries/, events/, giving/, resources/, store/
  new-life/
    new-life-page.component.ts   NLC-specific page (hero/story/gatherings/community sections)
    new-life-page.scss           Component-scoped styles (NLC's own color tokens via :host)
    sections/                    nlc-hero, nlc-story, nlc-gatherings, nlc-community
                                  (org-specific sections — not reused elsewhere, by design)

app.routes.ts    Each route carries `data: { orgId: 'ntm' | 'nlc' }` so OrgContextService
                 knows which Organization config is active for header/footer/nav/home sections.
app.component.*  Always renders <app-network-switcher>, <app-header>, <app-footer> around
                 <router-outlet>; header/footer render differently per the active org's variant.
```

## How an organization is rendered

```
Route (data.orgId) ──▶ OrgContextService.currentOrg() ──▶ Organization config
                                                              │
                        ┌─────────────────────────────────────┼─────────────────────────┐
                        ▼                                     ▼                         ▼
              HeaderComponent                       FooterComponent          NetworkSwitcherComponent
         (variant: standard | banner)          (variant: standard | banner)   (ecosystem links, active=orgId)
```

- **HomePageComponent** reads `org.homeSections` (an ordered array of section keys) and
  `@switch`-renders the matching section component — a future org can reuse the same 8 home
  sections in a different order/subset without a new page component.
- **New Life Church** is different enough visually (sticky "banner" header, different fonts/
  copy, hero/story/gatherings/community sections) that it keeps its own page + sections, but
  it no longer duplicates the header/footer/network-switcher — those are shared & config-driven.

## Adding a new organization (e.g. South Africa)

1. Add `config/organizations/south-africa.config.ts` (an `Organization` object).
2. Register it in `config/organizations/index.ts`'s `ORGANIZATIONS` map.
3. Add a route (or reuse existing page routes) with `data: { orgId: 'south-africa' }`.
4. Reuse `headerVariant`/`footerVariant: 'standard'` and `homeSections` to compose the home
   page from existing sections — only add new section components if the org truly needs
   content no existing section covers.

## Notes

- `config/navigation/` is not currently populated — nav items live per-org on
  `Organization.nav`/`footerColumns`. Add it only if a navigation preset needs to be
  shared *across* organizations.
- Dead/unused components found during the review were deleted rather than relocated:
  `home-hero.component.ts` and 7 unused `sections/home/*` files (`home-events-section`,
  `home-impact-section`, `home-ministries-section`, `home-vision-section`,
  `ministry-logo-strip`, `photo-gallery-section`, `school-of-faith-feature-section`) —
  none were imported anywhere; they were superseded by the `sections/home/<name>/` folders
  actually used by `HomePageComponent`.
- Visual design is unchanged; `standard`/`banner` variants are pixel-for-pixel what NTM/NLC
  looked like before the refactor.
- Component-scoped SCSS per component (no page-specific CSS in global `styles.css`).

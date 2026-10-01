import { Component } from '@angular/core';

@Component({
  selector: 'app-nlc-gatherings-section',
  standalone: true,
  template: `
    <section class="nlc-visit nlc-dark-section" id="visit" aria-labelledby="visit-title">
      <div class="nlc-content-width">
        <div class="nlc-centered-heading">
          <span class="nlc-eyebrow">Plan Your Visit</span>
          <h2 id="visit-title">Sunday <em>Encounters</em></h2>
          <p>Join us in person or online. Expect a warm welcome at the door, spirit-filled worship, and practical, thought-provoking teaching from the Word.</p>
        </div>
        <div class="nlc-service-grid">
          @for (service of services; track service.time) {
            <article class="nlc-service-card"><strong>{{ service.time }}</strong><span>{{ service.name }}</span></article>
          }
        </div>
        <p class="nlc-address-line">3000 East Gauthier Road, Lake Charles, LA 70607 · <a href="tel:+13374331111">+1 (337) 433-1111</a></p>
      </div>
    </section>

    <section class="nlc-ministries nlc-light-section" id="ministries" aria-labelledby="ministries-title">
      <div class="nlc-content-width">
        <div class="nlc-centered-heading">
          <span class="nlc-eyebrow">Ministries</span>
          <h2 id="ministries-title">Find your <em>place</em> here</h2>
        </div>
        <div class="nlc-ministry-grid">
          @for (ministry of ministries; track ministry.title) {
            <article class="nlc-light-card">
              <h3>{{ ministry.title }}</h3>
              <p>{{ ministry.description }}</p>
              @if (ministry.href) { <a class="nlc-text-link" [href]="ministry.href" target="_blank" rel="noopener">{{ ministry.link }} →</a> }
            </article>
          }
        </div>
      </div>
    </section>

    <section class="nlc-events nlc-light-section" id="events" aria-labelledby="events-title">
      <div class="nlc-content-width">
        <div class="nlc-centered-heading">
          <span class="nlc-eyebrow">Events</span>
          <h2 id="events-title">What's <em>coming up</em></h2>
        </div>
        <article class="nlc-feature-event">
          <div class="nlc-feature-event-copy">
            <span class="nlc-eyebrow">Featured Event</span>
            <h3>Kingdom Entrepreneurs Summit</h3>
            <p>A gathering of faith and marketplace leaders for teaching on kingdom-minded enterprise. Register on Eventbrite for dates, location, and tickets.</p>
            <a class="nlc-button nlc-button-gold" href="https://www.eventbrite.com/e/kingdom-entrepreneurs-summit-tickets-676272438067" target="_blank" rel="noopener">Register on Eventbrite</a>
          </div>
          <div class="nlc-event-year"><span>2026</span><small>Save the Date</small></div>
        </article>
        <div class="nlc-recurring-grid">
          @for (event of recurringEvents; track event.title) {
            <article class="nlc-light-card"><span class="nlc-event-when">{{ event.when }}</span><h3>{{ event.title }}</h3><p>{{ event.detail }}</p></article>
          }
        </div>
        <p class="nlc-announcement">Special services, revivals, and guest ministers are announced on our <a href="https://www.facebook.com/fbNLCIntl/" target="_blank" rel="noopener">Facebook page</a>.</p>
      </div>
    </section>
  `
})
export class NlcGatheringsSectionComponent {
  services = [
    { time: '8:30 AM', name: 'PowerTalk for Men & Soul-Care for Women' },
    { time: '9:30 AM', name: 'Sunday Worship Services' },
    { time: '5:30 PM', name: 'Corporate Prayer' },
    { time: '6:30 PM', name: 'School of Faith & Youth Life Groups' }
  ];

  ministries = [
    { title: 'iConnect Groups', description: 'God has designed us for community. iConnect small groups help newcomers enter into a stronger relationship with Christ and integrate into the family of New Life.' },
    { title: 'PowerTalk', description: "A men's ministry built around real conversation, accountability, and biblical manhood." },
    { title: 'Soul-Care', description: "A women's ministry centered on healing, identity, and growth in Christ." },
    { title: 'Youth Life Groups', description: 'Discipleship and community for the next generation, every Sunday evening.' },
    { title: 'School of Faith', description: 'The Bible institute founded by Dr. Thomas — on-site, online, and in prisons across Louisiana.', link: 'Visit SchoolofFaithUSA.org', href: 'https://schooloffaithusa.org' },
    { title: 'New Life Podcast', description: 'The weekly podcast from Dr. Norman Thomas — teaching and encouragement from New Life Church International.', link: 'Listen on Apple Podcasts', href: 'https://podcasts.apple.com/us/podcast/new-life-podcast-with-dr-normanthomas/id1239523888' }
  ];

  recurringEvents = [
    { when: 'Every Sunday', title: 'Sunday Worship', detail: '9:30 AM in person & online — plus 8:30 AM PowerTalk & Soul-Care.' },
    { when: 'Sunday 5:30 PM', title: 'Corporate Prayer', detail: 'The whole church gathering to seek God together before evening classes.' },
    { when: 'Sunday 6:30 PM', title: 'School of Faith & Youth', detail: 'Bible institute classes and youth life groups for every generation.' }
  ];
}
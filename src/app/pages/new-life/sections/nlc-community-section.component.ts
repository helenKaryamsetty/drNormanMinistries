import { Component } from '@angular/core';

@Component({
  selector: 'app-nlc-community-section',
  standalone: true,
  template: `
    <section class="nlc-media nlc-dark-section" id="media" aria-labelledby="media-title">
      <div class="nlc-content-width">
        <div class="nlc-media-heading">
          <div><span class="nlc-eyebrow">Media</span><h2 id="media-title">Watch the <em>Word.</em></h2></div>
          <a class="nlc-button nlc-button-outline" href="https://www.youtube.com/@DrNormanThomas" target="_blank" rel="noopener">Subscribe on YouTube →</a>
        </div>
        <div class="nlc-media-grid">
          <article class="nlc-video-card">
            <div class="nlc-video-frame"><iframe src="https://www.youtube.com/embed/videoseries?list=UUYTXjBoGE1ZK-gk-HGQ_qnw" title="New Life with Dr. Norman Thomas" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
            <div class="nlc-video-caption"><span>Sermon</span><p>New Life with Dr. Norman Thomas</p></div>
          </article>
          <a class="nlc-watch-card" href="https://www.youtube.com/@DrNormanThomas" target="_blank" rel="noopener">
            <span class="nlc-play-icon" aria-hidden="true">▶</span><h3>Watch every message</h3>
            <p>The full library of sermons and teaching, updated weekly on our YouTube channel.</p>
            <span class="nlc-text-link">Go to the Channel →</span>
          </a>
        </div>
        <p class="nlc-study-link"><a href="/assets/study-notes/" target="_blank" rel="noopener">Read the Study Notes →</a></p>
      </div>
    </section>

    <section class="nlc-prayer nlc-light-section" id="prayer" aria-label="Prayer and confessions">
      <div class="nlc-content-width nlc-two-column">
        <article class="nlc-light-card nlc-form-card">
          <span class="nlc-eyebrow">Prayer</span><h2>We would love to pray with you.</h2>
          <p>Corporate prayer meets every Sunday at 5:30 PM. Submit a prayer request any time — our team lifts every need before God.</p>
          <form name="prayer" method="POST" action="/new-life/" data-netlify="true" netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="prayer">
            <p class="nlc-honeypot"><label>Leave empty: <input name="bot-field"></label></p>
            <label class="nlc-sr-only" for="prayer-name">Your name (optional)</label><input id="prayer-name" name="name" type="text" placeholder="Your name (optional)">
            <label class="nlc-sr-only" for="prayer-email">Your email</label><input id="prayer-email" required name="email" type="email" placeholder="Your email">
            <label class="nlc-sr-only" for="prayer-request">How can we pray with you?</label><textarea id="prayer-request" required name="request" rows="3" placeholder="How can we pray with you?"></textarea>
            <button class="nlc-button nlc-button-gold" type="submit">Send Prayer Request</button>
          </form>
        </article>
        <article class="nlc-light-card nlc-confessions-card">
          <span class="nlc-eyebrow">Confessions</span><h2>Speak the Word over your life.</h2>
          <p>Daily scriptural confessions to build your faith — declaring what God's Word says about your identity, health, family, and future.</p>
          <a class="nlc-button nlc-button-light-outline" href="https://www.nlcinternational.org/home/" target="_blank" rel="noopener">Read the Confessions</a>
        </article>
      </div>
    </section>

    <section class="nlc-salvation nlc-light-section" aria-labelledby="salvation-title">
      <div class="nlc-content-width nlc-salvation-panel">
        <div><span class="nlc-eyebrow">Salvation Package</span><h2 id="salvation-title">Welcome to your new life in <em>Christ.</em></h2>
          <p>Please download Dr. Norman Thomas' books designed to help you build your new life in Christ — free.</p>
          <a class="nlc-button nlc-button-gold" href="https://www.normanthomas.org/site_eng/conteudo/salvation_pack.asp" target="_blank" rel="noopener">Get the Salvation Package</a>
        </div>
        <div class="nlc-book-links">
          <a href="/assets/now-that-i-am-saved.pdf" target="_blank" rel="noopener"><img src="/assets/book-now-that-i-am-saved.jpg" alt="Now That I Am Saved book cover" loading="lazy"><span>Free Download</span></a>
          <a href="/assets/the-power-of-focus.pdf" target="_blank" rel="noopener"><img src="/assets/book-power-of-focus.jpg" alt="The Power of Focus book cover" loading="lazy"><span>Free Download</span></a>
        </div>
      </div>
    </section>

    <section class="nlc-giving nlc-dark-section" id="give" aria-labelledby="give-title">
      <div class="nlc-centered-heading nlc-narrow-width">
        <span class="nlc-eyebrow">Give Online</span><h2 id="give-title">Sow into <em>good ground.</em></h2>
        <p>Your giving advances the Gospel through New Life Church, the School of Faith, and outreach across the world.</p>
        <div class="nlc-actions nlc-actions-centered">
          <a class="nlc-button nlc-button-gold" href="https://www.nlcinternational.org/home/" target="_blank" rel="noopener">Give Online</a>
          <a class="nlc-button nlc-button-outline" href="https://www.normanthomas.org/site_eng/conteudo/shop.asp" target="_blank" rel="noopener">Visit the E-Store</a>
        </div>
      </div>
    </section>

    <section class="nlc-contact nlc-light-section" id="contact" aria-labelledby="contact-title">
      <div class="nlc-content-width">
        <div class="nlc-centered-heading"><span class="nlc-eyebrow">Contact</span><h2 id="contact-title">Get in <em>touch</em></h2></div>
        <div class="nlc-contact-grid">
          <article class="nlc-light-card"><span class="nlc-eyebrow">Address</span><p>3000 East Gauthier Road<br>Lake Charles, LA 70607</p></article>
          <article class="nlc-light-card"><span class="nlc-eyebrow">Phone</span><p><a href="tel:+13374331111">+1 (337) 433-1111</a></p></article>
          <article class="nlc-light-card"><span class="nlc-eyebrow">Email</span><p><a href="mailto:info@normanthomas.org">info&#64;normanthomas.org</a></p></article>
          <article class="nlc-light-card"><span class="nlc-eyebrow">Mailing</span><p>P.O. Box 1186<br>Lake Charles, LA 70602-1186</p></article>
        </div>
        <div class="nlc-contact-bottom">
          <article class="nlc-contact-form">
            <h3>Send us a message</h3>
            <form name="contact" method="POST" action="/new-life/" data-netlify="true" netlify-honeypot="bot-field">
              <input type="hidden" name="form-name" value="contact">
              <p class="nlc-honeypot"><label>Leave empty: <input name="bot-field"></label></p>
              <label class="nlc-sr-only" for="contact-name">Your name</label><input id="contact-name" required name="name" type="text" placeholder="Your name">
              <label class="nlc-sr-only" for="contact-email">Your email</label><input id="contact-email" required name="email" type="email" placeholder="Your email">
              <label class="nlc-sr-only" for="contact-message">Your message</label><textarea id="contact-message" required name="message" rows="4" placeholder="Your message"></textarea>
              <button class="nlc-button nlc-button-gold" type="submit">Send Message</button>
            </form>
          </article>
          <div class="nlc-map"><iframe src="https://maps.google.com/maps?q=3000+East+Gauthier+Road,+Lake+Charles,+LA+70607&amp;output=embed" title="New Life Church International map" loading="lazy"></iframe></div>
        </div>
      </div>
    </section>
  `
})
export class NlcCommunitySectionComponent {}
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-hero',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="home-hero">
      <div class="hero-copy">
        <span class="eyebrow eyebrow-light"><i></i> A global leadership hub</span>
        <h1>A global voice for <em>Kingdom leadership.</em></h1>
        <p>Dr. Norman Thomas equips believers, leaders, and ministries to grow with wisdom, excellence, and purpose through a global ecosystem of faith.</p>
        <div class="hero-actions">
          <a class="button button-gold" routerLink="/ministries">Explore the ministries <span>↗</span></a>
          <a class="button button-outline" routerLink="/about">About Dr. Norman <span>→</span></a>
        </div>
        <div class="hero-note"><span class="note-rule"></span><span>Faith for life. Wisdom for the journey.</span></div>
      </div>
      <div class="hero-image">
        <img src="/assets/dr-norman-hero.png" alt="Dr. Norman Thomas sharing a message" />
        <div class="image-caption"><span>Dr. Norman Thomas, Jr.</span><span>Pastor · Author · Mentor</span></div>
      </div>
    </section>
  `,
  styles: [':host { display: block; }']
})
export class HomeHeroComponent {}
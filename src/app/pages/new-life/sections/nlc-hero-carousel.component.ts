import { Component, OnInit, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Subscription } from 'rxjs';
import { EventsService, CurrentEvent } from '../../../core/services/events.service';

@Component({
  selector: 'app-nlc-hero-carousel',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="nlc-hero-carousel-container" role="region" aria-roledescription="carousel" aria-label="Upcoming events">
      <div class="nlc-hero-carousel-wrapper">
        <div class="nlc-hero-carousel-slide nlc-hero-carousel-intro"
          [class.active]="currentIndex === 0"
          [attr.aria-hidden]="currentIndex !== 0">
          <img class="nlc-hero-carousel-intro-image" src="/assets/church-speaking.webp" alt="" fetchpriority="high" decoding="async">
          <div class="nlc-hero-carousel-overlay"></div>
          <div class="nlc-hero-carousel-content">
            <div class="nlc-hero-carousel-text">
              <span class="nlc-eyebrow">Sunday Encounters — In-Person &amp; Online</span>
              <h1 class="nlc-hero-carousel-title">New Life for <em>every generation.</em></h1>
              <p class="nlc-hero-carousel-description">A non-denominational church home in Lake Charles, Louisiana, built on discipleship, practical life-skill teaching from the Word, and real Christian fellowship — since 1999.</p>
              <div class="nlc-actions">
                <a class="nlc-button nlc-button-gold" href="https://www.youtube.com/@DrNormanThomas" target="_blank" rel="noopener">Watch Now</a>
                <a class="nlc-button nlc-button-outline" href="#nlc-mission-title">Plan Your Visit</a>
              </div>
            </div>
          </div>
        </div>
        @if (events.length > 0) {
          @for (event of events; track event.id; let i = $index) {
            <div 
              class="nlc-hero-carousel-slide" 
              [class.active]="i + 1 === currentIndex"
              [style.backgroundImage]="'url(' + event.image + ')'"
              [attr.aria-hidden]="i + 1 !== currentIndex">
              <div class="nlc-hero-carousel-overlay"></div>
              <div class="nlc-hero-carousel-content">
                <div class="nlc-hero-carousel-text">
                  <p class="nlc-hero-carousel-date">
                    {{ event.date }}@if (event.time) { <span> · {{ event.time }}</span> }
                  </p>
                  <h2 class="nlc-hero-carousel-title">{{ event.title }}</h2>
                  <p class="nlc-hero-carousel-description">{{ event.description }}</p>
                  @if (event.ctaText && event.ctaLink) {
                    <a [href]="event.ctaLink" class="nlc-hero-carousel-cta"
                      [attr.target]="event.ctaLink.startsWith('http') ? '_blank' : null"
                      [attr.rel]="event.ctaLink.startsWith('http') ? 'noopener noreferrer' : null">
                      {{ event.ctaText }} →
                    </a>
                  }
                </div>
              </div>
            </div>
          }
        }
      </div>

      @if (events.length > 0) {
        <div class="nlc-hero-carousel-controls" role="group" aria-label="Event carousel controls">
          <button 
            type="button" 
            class="nlc-carousel-btn nlc-carousel-prev"
            aria-label="Previous event"
            (click)="previousSlide()">
            ‹
          </button>
          <button 
            type="button" 
            class="nlc-carousel-btn nlc-carousel-next"
            aria-label="Next event"
            (click)="nextSlide()">
            ›
          </button>
        </div>

        <!-- Dots Navigation -->
        <div class="nlc-hero-carousel-dots">
          @for (dot of slideIndexes; track dot) {
            <button 
              type="button"
              class="nlc-carousel-dot"
              [class.active]="dot === currentIndex"
              (click)="goToSlide(dot)"
              [attr.aria-current]="dot === currentIndex ? 'true' : null"
              [attr.aria-label]="dot === 0 ? 'Go to welcome slide' : 'Go to event ' + dot">
            </button>
          }
        </div>
      }
    </div>
  `,
  styles: [`
    .nlc-hero-carousel-container {
      inset: 0;
      position: absolute;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    :host {
      display: block;
      inset: 0;
      position: absolute;
    }

    .nlc-hero-carousel-wrapper {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
    }

    .nlc-hero-carousel-slide {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      opacity: 0;
      visibility: hidden;
      transition: opacity 1400ms cubic-bezier(.4, 0, .2, 1), visibility 0s linear 1400ms;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #07121a;
    }

    .nlc-hero-carousel-slide.active {
      opacity: 1;
      visibility: visible;
      transition-delay: 0s;
    }

    .nlc-hero-carousel-text {
      opacity: 0;
      transform: translateY(18px);
      transition: opacity 1000ms ease, transform 1200ms cubic-bezier(.22, 1, .36, 1);
    }

    .nlc-hero-carousel-slide.active .nlc-hero-carousel-text {
      opacity: 1;
      transform: none;
      transition-delay: 350ms;
    }

    .nlc-hero-carousel-slide:not(.nlc-hero-carousel-intro) {
      transform: scale(1.04);
      transition: opacity 1400ms cubic-bezier(.4, 0, .2, 1), transform 6000ms ease-out, visibility 0s linear 1400ms;
    }

    .nlc-hero-carousel-slide.active:not(.nlc-hero-carousel-intro) {
      transform: scale(1);
    }

    .nlc-hero-carousel-intro-image {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center 25%;
    }

    .nlc-hero-carousel-intro .nlc-eyebrow {
      color: #d4af37;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 3px;
      text-transform: uppercase;
    }

    .nlc-hero-carousel-intro .nlc-hero-carousel-description { margin-bottom: 2rem; }
    .nlc-actions { display: flex; flex-wrap: wrap; gap: 16px; }

    .nlc-hero-carousel-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, rgba(7, 10, 18, .9), rgba(7, 10, 18, .58) 58%, rgba(7, 10, 18, .25)), linear-gradient(0deg, rgba(7, 10, 18, .55), transparent 55%);
      z-index: 1;
    }

    .nlc-hero-carousel-content {
      position: relative;
      z-index: 2;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 2rem;
      text-align: left;
      max-width: 1180px;
      margin-inline: auto;
    }

    .nlc-hero-carousel-text {
      max-width: 700px;
      color: white;
    }

    .nlc-hero-carousel-date {
      font-size: 0.875rem;
      letter-spacing: 0;
      text-transform: uppercase;
      margin: 0;
      opacity: 0.9;
      margin-bottom: 0.5rem;
    }

    .nlc-hero-carousel-title {
      font-size: clamp(2.5rem, 5vw, 4.5rem);
      font-weight: 700;
      margin: 1rem 0;
      line-height: 1.2;
    }

    .nlc-hero-carousel-title em {
      font-style: italic;
      font-weight: 700;
      color: #d4af37;
    }

    .nlc-hero-carousel-description {
      font-size: 1.1rem;
      line-height: 1.6;
      margin: 0 0 1.5rem 0;
      opacity: 0.95;
    }

    .nlc-hero-carousel-cta {
      display: inline-block;
      background-color: #d4af37;
      color: #1a1a1a;
      padding: 0.75rem 2rem;
      border-radius: 4px;
      font-weight: 600;
      text-decoration: none;
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .nlc-hero-carousel-cta:hover {
      background-color: #e8c547;
      transform: translateY(-2px);
    }

    .nlc-hero-carousel-controls {
      position: absolute;
      inset: 0;
      z-index: 10;
      pointer-events: none;
    }

    .nlc-hero-carousel-controls .nlc-carousel-btn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      pointer-events: auto;
    }

    .nlc-carousel-prev { left: 20px; }
    .nlc-carousel-next { right: 20px; }

    .nlc-carousel-btn {
      background: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(6px);
      border: 1px solid rgba(255, 255, 255, 0.4);
      color: white;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      font-size: 1.5rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
    }

    .nlc-carousel-btn:hover {
      background: rgba(255, 255, 255, 0.5);
      border-color: white;
    }

    .nlc-hero-carousel-dots {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 32px;
      z-index: 10;
      display: flex;
      gap: 0.75rem;
      justify-content: center;
    }

    .nlc-carousel-dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      border: 2px solid rgba(255, 255, 255, 0.6);
      background: transparent;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .nlc-carousel-dot.active {
      background: #d4af37;
      border-color: #d4af37;
      transform: scale(1.2);
    }

    .nlc-carousel-dot:hover {
      border-color: white;
      background: rgba(255, 255, 255, 0.3);
    }

    @media (max-width: 768px) {
      .nlc-hero-carousel-content {
        padding: 90px 22px 120px;
      }

      .nlc-hero-carousel-title {
        font-size: 2.5rem;
      }

      .nlc-hero-carousel-description {
        font-size: 0.9rem;
      }

      .nlc-carousel-btn {
        width: 40px;
        height: 40px;
        font-size: 1.2rem;
      }

      .nlc-carousel-prev { left: 10px; }
      .nlc-carousel-next { right: 10px; }

      .nlc-hero-carousel-dots {
        bottom: 20px;
      }
    }
  `]
})
export class NlcHeroCarouselComponent implements OnInit, OnDestroy {
  events: CurrentEvent[] = [];
  currentIndex = 0;
  private autoplayInterval?: ReturnType<typeof setInterval>;
  private eventsSubscription?: Subscription;
  private isBrowser: boolean;

  constructor(
    private eventsService: EventsService,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    this.eventsSubscription = this.eventsService.currentEvents$.subscribe((events) => {
      const currentEventId = this.events[this.currentIndex - 1]?.id;
      this.events = events;
      const matchingIndex = this.events.findIndex((event) => event.id === currentEventId);
      this.currentIndex = matchingIndex >= 0 ? matchingIndex + 1 : 0;
      this.startAutoplay();
    });
  }

  // Slide 0 is the welcome hero; events follow at 1..n.
  get slideCount(): number {
    return this.events.length + 1;
  }

  get slideIndexes(): number[] {
    return Array.from({ length: this.slideCount }, (_, i) => i);
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.slideCount;
    this.startAutoplay();
  }

  previousSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.slideCount) % this.slideCount;
    this.startAutoplay();
  }

  goToSlide(index: number): void {
    if (index < 0 || index >= this.slideCount) return;
    this.currentIndex = index;
    this.startAutoplay();
  }

  private startAutoplay(): void {
    this.stopAutoplay();
    if (this.isBrowser && this.events.length > 0) {
      this.autoplayInterval = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.slideCount;
      }, 4000);
    }
  }

  private stopAutoplay(): void {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
      this.autoplayInterval = undefined;
    }
  }

  ngOnDestroy(): void {
    this.eventsSubscription?.unsubscribe();
    this.stopAutoplay();
  }
}

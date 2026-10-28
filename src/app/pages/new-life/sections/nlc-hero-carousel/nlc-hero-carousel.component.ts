import { Component, OnInit, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Subscription } from 'rxjs';
import { EventsService, CurrentEvent } from '../../../../core/services/events.service';

@Component({
  selector: 'app-nlc-hero-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nlc-hero-carousel.component.html',
  styleUrls: ['./nlc-hero-carousel.component.scss']
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

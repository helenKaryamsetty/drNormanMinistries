import { Component, OnInit, OnDestroy, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [NgFor],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent implements OnInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);
  scrollY = 0;
  particlePositions: Array<{ x: number; y: number; opacity: number }> = [];

  ngOnInit() {
    this.initializeParticles();
    // Only add scroll listener in browser environment
    if (isPlatformBrowser(this.platformId)) {
      window.addEventListener('scroll', this.onScroll.bind(this));
    }
  }

  ngOnDestroy() {
    // Only remove listener in browser environment
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('scroll', this.onScroll.bind(this));
    }
  }

  initializeParticles() {
    // Generate random sparkle positions
    this.particlePositions = Array.from({ length: 8 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: Math.random() * 0.6 + 0.2
    }));
  }

  onScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.scrollY = window.scrollY;
    }
  }
}

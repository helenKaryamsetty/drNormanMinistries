import { Component } from '@angular/core';

@Component({
  selector: 'app-nlc-story-section',
  standalone: true,
  template: `
    <section class="nlc-story nlc-light-section" id="about" aria-labelledby="story-title">
      <div class="nlc-story-intro nlc-content-width">
        <div class="nlc-story-image-wrap">
          <span class="nlc-image-frame"></span>
          <img src="/assets/pastors-couple.webp" alt="Dr. Norman Thomas, Jr. and Dr. Debbie Thomas" loading="lazy" decoding="async">
        </div>
        <div class="nlc-story-copy">
          <span class="nlc-eyebrow">Our Story</span>
          <h2 id="story-title">Founded January 17, <em>1999</em></h2>
          <p>New Life Church International was founded by Pastor Norman Thomas, Jr. and Debbie Thomas, Ph.D. Our goal is to bring the unsaved to the knowledge of Christ and to give Christians an opportunity to grow through discipleship classes, practical life-skill teachings from the Word of God, and Christian fellowship.</p>
          <div class="nlc-pastor-address">
            <span>Senior Pastors</span>
            <strong>Dr. Norman Thomas, Jr. &amp; Dr. Debbie Thomas</strong>
            <small>3000 East Gauthier Road, Lake Charles, LA 70607</small>
          </div>
        </div>
      </div>
      <div class="nlc-pastor-bios nlc-content-width">
        <article class="nlc-light-card">
          <span class="nlc-eyebrow">Senior Pastor &amp; Founder</span>
          <h3>Dr. Norman Thomas, Jr.</h3>
          <p>Senior pastor and founder of New Life Church International, a non-denominational church in Lake Charles, Louisiana. He is also founder of the School of Faith Bible Institute — including a prison-based program whose graduates may earn months off their time served.</p>
          <p>Pastor Thomas received his Honorary Doctorate of Humane Letters from Cornerstone University, and hosts the weekly <em>New Life Podcast</em>.</p>
        </article>
        <article class="nlc-light-card">
          <span class="nlc-eyebrow">Assistant Pastor &amp; Co-Founder</span>
          <h3><a href="http://www.drdebbie.org/" target="_blank" rel="noopener">Dr. Debbie F. Thomas</a></h3>
          <p>A teacher at heart — especially of the Word of God — and a motivational speaker with appeal to a diverse audience. She has served as a professor in the Schools of Social Work at Grambling State University and Louisiana State University, and as Dean of Instruction at Sowela Technical Community College.</p>
          <p>Certified by the Louisiana State Board of Board Certified Social Workers, she is founder of Family Life Counseling Services, L.L.C., providing professional counseling, training, and professional development.</p>
        </article>
      </div>
    </section>
  `
})
export class NlcStorySectionComponent {}
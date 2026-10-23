import { Component } from '@angular/core';

@Component({
  selector: 'app-nlc-gatherings-section',
  standalone: true,
  templateUrl: './nlc-gatherings-section.component.html',
  styleUrls: ['./nlc-gatherings-section.component.scss']
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
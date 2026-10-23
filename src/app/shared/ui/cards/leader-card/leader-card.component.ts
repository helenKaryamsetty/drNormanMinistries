import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-leader-card',
  standalone: true,
  templateUrl: './leader-card.component.html',
  styleUrls: ['./leader-card.component.scss']
})
export class LeaderCardComponent {
  @Input() image = '';
  @Input() imageAlt = '';
  @Input() role = '';
  @Input() name = '';
}
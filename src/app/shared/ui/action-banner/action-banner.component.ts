import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-action-banner',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './action-banner.component.html',
  styleUrls: ['./action-banner.component.scss']
})
export class ActionBannerComponent {
  @Input() eyebrow = '';
  @Input() title = '';
  @Input() accent = '';
  @Input() description = '';
  @Input() primaryText = '';
  @Input() primaryLink = '/';
  @Input() primaryHref = '';
  @Input() secondaryText = '';
  @Input() secondaryLink = '';
}
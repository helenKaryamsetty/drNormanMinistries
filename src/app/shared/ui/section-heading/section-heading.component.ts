import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-section-heading',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './section-heading.component.html',
  styleUrls: ['./section-heading.component.scss']
})
export class SectionHeadingComponent {
  @Input() eyebrow = '';
  @Input() title = '';
  @Input() accent = '';
  @Input() aside = '';
  @Input() linkText = '';
  @Input() link = '';
  @Input() light = false;
}
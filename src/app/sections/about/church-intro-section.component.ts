import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-church-intro-section',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './church-intro-section.component.html',
  styleUrls: ['./church-intro-section.component.scss']
})
export class ChurchIntroSectionComponent {}
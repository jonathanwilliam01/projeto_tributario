import { Component } from '@angular/core';
import { SistemaLinksComponent } from '../shared/sistema-links/sistema-links.component';
import dados from './issonline-dev.links.json';

@Component({
  selector: 'app-issonline-dev',
  standalone: true,
  imports: [SistemaLinksComponent],
  templateUrl: './issonline-dev.component.html'
})
export class IssonlineDevComponent {
  dados = dados;
}

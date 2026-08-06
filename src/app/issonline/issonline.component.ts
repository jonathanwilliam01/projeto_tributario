import { Component } from '@angular/core';
import { SistemaLinksComponent } from '../shared/sistema-links/sistema-links.component';
import dados from './issonline.links.json';

@Component({
  selector: 'app-issonline',
  standalone: true,
  imports: [SistemaLinksComponent],
  templateUrl: './issonline.component.html'
})
export class IssonlineComponent {
  dados = dados;
}

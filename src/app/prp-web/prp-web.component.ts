import { Component } from '@angular/core';
import { SistemaLinksComponent } from '../shared/sistema-links/sistema-links.component';
import dados from './prp-web.links.json';

@Component({
  selector: 'app-prp-web',
  standalone: true,
  imports: [SistemaLinksComponent],
  templateUrl: './prp-web.component.html'
})
export class PrpWebComponent {
  dados = dados;
}

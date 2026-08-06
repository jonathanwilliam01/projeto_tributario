import { Component } from '@angular/core';
import { SistemaLinksComponent } from '../shared/sistema-links/sistema-links.component';
import dados from './atende-mais.links.json';

@Component({
  selector: 'app-atende-mais',
  standalone: true,
  imports: [SistemaLinksComponent],
  templateUrl: './atende-mais.component.html'
})
export class AtendeMaisComponent {
  dados = dados;
}

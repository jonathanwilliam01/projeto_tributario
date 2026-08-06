import { Component } from '@angular/core';
import { SistemaLinksComponent } from '../shared/sistema-links/sistema-links.component';
import dados from './jucesp.links.json';

@Component({
  selector: 'app-jucesp',
  standalone: true,
  imports: [SistemaLinksComponent],
  templateUrl: './jucesp.component.html'
})
export class JucespComponent {
  dados = dados;
}

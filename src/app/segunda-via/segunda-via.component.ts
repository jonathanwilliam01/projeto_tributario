import { Component } from '@angular/core';
import { SistemaLinksComponent } from '../shared/sistema-links/sistema-links.component';
import dados from './segunda-via.links.json';

@Component({
  selector: 'app-segunda-via',
  standalone: true,
  imports: [SistemaLinksComponent],
  templateUrl: './segunda-via.component.html'
})
export class SegundaViaComponent {
  dados = dados;
}

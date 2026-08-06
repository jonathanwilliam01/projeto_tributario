import { Component } from '@angular/core';
import { SistemaLinksComponent } from '../shared/sistema-links/sistema-links.component';
import dados from './transparencia.links.json';

@Component({
  selector: 'app-transparencia',
  standalone: true,
  imports: [SistemaLinksComponent],
  templateUrl: './transparencia.component.html'
})
export class TransparenciaComponent {
  dados = dados;
}

import { Component } from '@angular/core';
import { SistemaLinksComponent } from '../shared/sistema-links/sistema-links.component';
import dados from './itbi.links.json';

@Component({
  selector: 'app-itbi',
  standalone: true,
  imports: [SistemaLinksComponent],
  templateUrl: './itbi.component.html'
})
export class ItbiComponent {
  dados = dados;
}

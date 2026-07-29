import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-transparencia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transparencia.component.html',
  styleUrl: './transparencia.component.scss'
})
export class TransparenciaComponent {
  currentComponent = 'transparencia';
}

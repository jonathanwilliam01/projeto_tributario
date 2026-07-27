import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-segunda-via',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './segunda-via.component.html',
  styleUrl: './segunda-via.component.scss'
})
export class SegundaViaComponent {
  currentComponent = 'segunda-via';

  currentPage: number = 1;

  pag(page: number): void {
    this.currentPage = page;
  }
}

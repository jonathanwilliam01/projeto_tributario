import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-atende-mais',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './atende-mais.component.html',
  styleUrl: './atende-mais.component.scss'
})
export class AtendeMaisComponent {
  currentComponent = 'atende_mais';

  currentPage: number = 1;

  pag(page: number): void {
    this.currentPage = page;
  }
}

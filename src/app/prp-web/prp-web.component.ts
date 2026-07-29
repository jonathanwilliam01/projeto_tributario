import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-prp-web',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prp-web.component.html',
  styleUrl: './prp-web.component.scss'
})
export class PrpWebComponent {
  currentComponent = 'prp_web';

  currentPage: number = 1;

  pag(page: number): void {
    this.currentPage = page;
  }
}

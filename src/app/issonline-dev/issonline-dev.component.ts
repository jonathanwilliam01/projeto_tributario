import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-issonline-dev',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './issonline-dev.component.html',
  styleUrl: './issonline-dev.component.scss'
})
export class IssonlineDevComponent {
  currentComponent = 'IssOnline-dev';

  currentPage: number = 1;

  pag(page: number): void {
    this.currentPage = page;
}
}

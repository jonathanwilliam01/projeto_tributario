import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-jucesp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jucesp.component.html',
  styleUrl: './jucesp.component.scss'
})
export class JucespComponent {
  currentComponent = 'jucesp';
}

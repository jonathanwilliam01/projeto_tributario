import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-egov',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './egov.component.html',
  styleUrl: './egov.component.scss'
})
export class EgovComponent {
  currentComponent = 'egov';
}

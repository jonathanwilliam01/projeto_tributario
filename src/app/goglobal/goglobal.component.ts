import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-goglobal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './goglobal.component.html',
  styleUrls: ['./goglobal.component.scss']
})
export class GoglobalComponent {
  @Input() item: any;
}

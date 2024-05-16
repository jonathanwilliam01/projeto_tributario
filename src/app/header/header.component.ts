import { Component } from '@angular/core';
import { ItemService } from '../item.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  items = [
    { name1: 'GoGlobal',      description1: 'GoGlobal' }
  ];

  constructor(private itemService: ItemService) {}

  onItemClick(item: any) {
    this.itemService.selectItem(item);
  }
}

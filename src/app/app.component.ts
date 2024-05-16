import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoglobalComponent } from './goglobal/goglobal.component';
import { ItemService } from './item.service';
import { HeaderComponent } from './header/header.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, GoglobalComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ItemService]
})
export class AppComponent implements OnInit {
title='Tributario'

  selectedItem: any;

  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.itemService.selectedItem$.subscribe(item => {
      this.selectedItem = item;
    });
  }
}

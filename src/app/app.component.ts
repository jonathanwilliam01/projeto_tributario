import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { GoglobalComponent } from './goglobal/goglobal.component';
import { ItemService } from './item.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, GoglobalComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ItemService]
})
export class AppComponent implements OnInit {
  selectedItem: any;

  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.itemService.selectedItem$.subscribe(item => {
      this.selectedItem = item;
    });
  }
}

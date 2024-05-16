import { Component } from '@angular/core';
import { ItemService } from '../item.service';
import { Router, RouterEvent } from '@angular/router';
import { CommonModule } from '@angular/common';
import { routes } from '../app.routes';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  items = [
    { name1: 'GoGlobal', description1: 'GoGlobal' },
    /*{ name2: 'IssOnline', description2: 'IssOnline' },
    { name3: 'E-gov', description3: 'E-gov' },
    { name4: 'E-gov_dev', description4: 'E-gov DEV' },
    { name5: 'Config E-gov', description5: 'Config E-gov' },
    { name6: 'Interfaces', description6: 'Interfaces' },
    { name7: 'links Uteis', description7: 'Links Uteis' }*/
  ];

  constructor(private itemService: ItemService, private router: Router) {}

  onItemClick(item: any) {
    this.itemService.selectItem(item);
  }

  reloadPage() {
    window.location.reload();
    ;
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoGlobalComponent } from './goglobal/goglobal.component';
import { ItemService } from './item.service';
import { HeaderComponent } from './header/header.component';
import { IssonlineComponent } from './issonline/issonline.component';
import { EgovComponent } from './egov/egov.component';
import { EgovDevComponent } from './egov-dev/egov-dev.component';
import { InterfacesComponent } from './interfaces/interfaces.component';
import { LinksComponent } from './links/links.component';
import { ConfigEgovComponent } from './config-egov/config-egov.component';
import { LoginNovoComponent } from './login-novo/login-novo.component';
import { SetupComponent } from './setup/setup.component';
import { IssonlineDevComponent } from './issonline-dev/issonline-dev.component';
import { PessoasComponent } from './pessoas/pessoas.component';
import { JucespComponent } from './jucesp/jucesp.component';
import { SegundaViaComponent } from './segunda-via/segunda-via.component';
import { AtendeMaisComponent } from './atende-mais/atende-mais.component';
import { PrpWebComponent } from './prp-web/prp-web.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, GoGlobalComponent, HeaderComponent, IssonlineComponent, EgovComponent,
    EgovDevComponent, InterfacesComponent, LinksComponent, ConfigEgovComponent, LoginNovoComponent, SetupComponent, IssonlineDevComponent, PessoasComponent,
    JucespComponent, SegundaViaComponent, AtendeMaisComponent, PrpWebComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ItemService]
})
export class AppComponent {
  title= 'trib'

  currentComponent: string = '';
  copied = false;

  setComponent(componentName: string) {
    this.currentComponent = componentName;
  }

  copyEmail() {
    navigator.clipboard.writeText('Jonathan.willian@embras.net').then(() => {
      this.copied = true;
      setTimeout(() => this.copied = false, 2000);
    });
  }
}

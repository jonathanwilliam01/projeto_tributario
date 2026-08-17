import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoGlobalComponent } from './goglobal/goglobal.component';
import { ItemService } from './item.service';
import { HeaderComponent } from './header/header.component';
import { IssonlineComponent } from './issonline/issonline.component';
import { EgovComponent } from './egov/egov.component';
import { EgovDevComponent } from './egov-dev/egov-dev.component';
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
import { TransparenciaComponent } from './transparencia/transparencia.component';
import { NotasVersaoComponent } from './notas-versao/notas-versao.component';
import notasVersaoData from './notas-versao/notas_versao.json';
import { SearchService, ResultadoBusca } from './search/search.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, GoGlobalComponent, HeaderComponent, IssonlineComponent, EgovComponent,
    EgovDevComponent, LinksComponent, ConfigEgovComponent, LoginNovoComponent, SetupComponent, IssonlineDevComponent, PessoasComponent,
    JucespComponent, SegundaViaComponent, AtendeMaisComponent, PrpWebComponent, TransparenciaComponent, NotasVersaoComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ItemService]
})
export class AppComponent {
  title= 'trib'

  currentComponent: string = '';
  copied = false;
  notasVersaoVisivel = false;
  versaoAtual = [...notasVersaoData.versoes].sort((a, b) => b.versao.localeCompare(a.versao))[0]?.versao ?? '';

  termoBusca = '';
  resultadosBusca: ResultadoBusca[] | null = null;
  linkCopiado: string | null = null;

  constructor(private searchService: SearchService) {}

  setComponent(componentName: string) {
    this.resultadosBusca = null;
    this.currentComponent = componentName;
  }

  buscar(termo: string) {
    const query = termo.trim();
    if (!query) {
      this.resultadosBusca = null;
      this.currentComponent = '';
      return;
    }
    this.termoBusca = query;
    this.resultadosBusca = this.searchService.buscar(query);
    this.currentComponent = 'busca';
  }

  abrirNotasVersao() {
    this.notasVersaoVisivel = true;
  }

  fecharNotasVersao() {
    this.notasVersaoVisivel = false;
  }

  copiarLink(url: string, event: Event) {
    event.preventDefault();
    event.stopPropagation();
    navigator.clipboard.writeText(url).then(() => {
      this.linkCopiado = url;
      setTimeout(() => this.linkCopiado = null, 2000);
    });
  }

  copyEmail() {
    navigator.clipboard.writeText('jonathan.willian@embras.net').then(() => {
      this.copied = true;
      setTimeout(() => this.copied = false, 2000);
    });
  }
}

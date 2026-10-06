import { Injectable } from '@angular/core';
import goglobal from '../goglobal/goglobal.links.json';
import egov from '../egov/egov.links.json';
import egovDev from '../egov-dev/egov-dev.links.json';
import issonline from '../issonline/issonline.links.json';
import issonlineDev from '../issonline-dev/issonline-dev.links.json';
import jucesp from '../jucesp/jucesp.links.json';
import links from '../links/links.links.json';
import loginNovo from '../login-novo/login-novo.links.json';
import atendeMais from '../atende-mais/atende-mais.links.json';
import transparencia from '../transparencia/transparencia.links.json';
import setup from '../setup/setup.links.json';
import pessoas from '../pessoas/pessoas.links.json';
import configEgov from '../config-egov/config-egov.links.json';
import segundaVia from '../segunda-via/segunda-via.links.json';
import itbi from '../itbi/itbi.links.json';
import { DadosSistema } from '../shared/sistema-links/sistema-links.component';

export interface ResultadoBusca {
  sistema: string;
  nomeSistema: string;
  local: string;
  cliente: string;
  url: string;
  host: string;
  homolog: boolean;
}

export interface GrupoBusca {
  cliente: string;
  estado: string;
  itens: ResultadoBusca[];
}

const SISTEMAS: DadosSistema[] = [
  goglobal, issonline, issonlineDev, egov, egovDev, segundaVia, configEgov, itbi, loginNovo,
  setup, pessoas, jucesp, atendeMais, transparencia, links
];

export const ESTADOS: Record<string, string> = { 'São Paulo': 'SP', 'Rio de Janeiro': 'RJ', 'Minas Gerais': 'MG' };
const SUFIXO_HOMOLOG = /\s+homolog\.?$/i;

export function normalizar(texto: string): string {
  return texto.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase().trim();
}

function host(url: string): string {
  try { return new URL(url).host; } catch { return url; }
}

export function slug(texto: string): string {
  return normalizar(texto).replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

const temAcento = (texto: string) => /[^\x00-\x7F]/.test(texto);

// Agrupa ignorando acentos e o sufixo "Homolog."; exibe a grafia acentuada quando houver.
function agruparPorCliente(itens: ResultadoBusca[]): GrupoBusca[] {
  const grupos = new Map<string, GrupoBusca>();
  for (const r of itens) {
    const nome = r.cliente.replace(SUFIXO_HOMOLOG, '');
    const chave = normalizar(nome);
    let grupo = grupos.get(chave);
    if (!grupo) grupos.set(chave, grupo = { cliente: nome, estado: ESTADOS[r.local] ?? '', itens: [] });
    if (temAcento(nome) && !temAcento(grupo.cliente)) grupo.cliente = nome;
    grupo.itens.push(r);
  }
  return [...grupos.values()];
}

@Injectable({ providedIn: 'root' })
export class SearchService {
  private indice: ResultadoBusca[] = SISTEMAS.flatMap(sistema =>
    sistema.grupos.flatMap(grupo =>
      grupo.itens
        .filter(item => item.url && !item.inativo)
        .map(item => ({
          sistema: sistema.sistema,
          nomeSistema: sistema.sistema.replace(SUFIXO_HOMOLOG, ''),
          local: grupo.nome,
          cliente: item.cliente,
          url: item.url,
          host: host(item.url),
          homolog: SUFIXO_HOMOLOG.test(sistema.sistema) || SUFIXO_HOMOLOG.test(item.cliente)
        }))
    )
  );

  buscar(termo: string): GrupoBusca[] {
    const termos = normalizar(termo).split(/\s+/).filter(Boolean);
    if (!termos.length) return [];

    return agruparPorCliente(this.indice.filter(r => {
      const texto = normalizar(`${r.sistema} ${r.local} ${r.cliente} ${r.url}`);
      return termos.every(t => texto.includes(t));
    }));
  }

  porUrl(url: string): ResultadoBusca | undefined {
    return this.indice.find(r => r.url === url);
  }

  clientes(): GrupoBusca[] {
    return agruparPorCliente(this.indice.filter(r => r.local in ESTADOS))
      .sort((a, b) => a.cliente.localeCompare(b.cliente, 'pt-BR'));
  }
}

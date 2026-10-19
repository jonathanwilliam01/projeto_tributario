// Substitui o service worker do app antigo: limpa o cache, se desinstala e
// recarrega as abas abertas, que passam a cair no redirecionamento.
self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const nomes = await caches.keys();
    await Promise.all(nomes.filter(nome => nome.startsWith('ngsw:')).map(nome => caches.delete(nome)));
    await self.registration.unregister();
    const abas = await self.clients.matchAll({ type: 'window' });
    abas.forEach(aba => aba.navigate(aba.url));
  })());
});

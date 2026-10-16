const sistemas = {
  egov: { dados: require('../src/app/egov/egov.links.json'), regex: /\(\(([\d.]+)\)/ },
  issonline: { dados: require('../src/app/issonline/issonline.links.json'), regex: /ISS Online v\.\s*([\d.]+)/ }
};

const TIMEOUT_MS = 12000;
const TENTATIVAS = 2;

// Tenta de novo em falha de rede/timeout: alguns servidores demoram quando recebem vários pedidos juntos.
// null = página sem versão; undefined = não respondeu.
async function versaoDe(url, regex, tentativa = 1) {
  try {
    const resposta = await fetch(url, { signal: AbortSignal.timeout(TIMEOUT_MS) });
    const corpo = Buffer.from(await resposta.arrayBuffer()).toString('latin1');
    return corpo.match(regex)?.[1] ?? null;
  } catch {
    return tentativa < TENTATIVAS ? versaoDe(url, regex, tentativa + 1) : undefined;
  }
}

// Retorna { url: versão | null } de todos os clientes ativos do sistema.
module.exports = async (req, res) => {
  const sistema = sistemas[req.query.sistema];
  if (!sistema) return res.status(400).json({ erro: 'Sistema inválido' });

  const urls = sistema.dados.grupos.flatMap(g => g.itens).filter(i => i.url && !i.inativo).map(i => i.url);
  const versoes = await Promise.all(urls.map(url => versaoDe(url, sistema.regex)));

  // Com cliente que não respondeu, cache curto para a falha não ficar presa.
  const cache = versoes.includes(undefined) ? 's-maxage=60, stale-while-revalidate=600' : 's-maxage=600, stale-while-revalidate=3600';
  res.setHeader('Cache-Control', cache);
  res.status(200).json(Object.fromEntries(urls.map((url, i) => [url, versoes[i] ?? null])));
};

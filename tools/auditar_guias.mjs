#!/usr/bin/env node
// SPDX-License-Identifier: MIT
//
// Auditor de las guías de Nodo Cero.
// Revisa cada archivo .md del repo contra las reglas de la especificación:
//   - texto: voseo sin signos de exclamación, sin emojis, «n8n» en minúscula, sin marcas ni frases prohibidas;
//   - nada de claves, correos ni teléfonos;
//   - estructura de cada guía (para quién es, qué vas a lograr, tiempo, qué necesitás, pasos, si algo falla, para seguir);
//   - enlaces internos y anclas (#titulo) que existan;
//   - enlaces al repo de workflows con ids que existan (y, si le pasás la carpeta, que la carpeta exista);
//   - los enlaces de Core, Avalanche Builder Hub y Team1 con sus parámetros UTM.
// Con --red, además, pide cada enlace externo en vivo y avisa si no responde
// (con fetch y, si el sitio lo rechaza, con curl, que tiene que estar instalado).
//
// Uso:
//   node tools/auditar_guias.mjs
//   node tools/auditar_guias.mjs --red
//   node tools/auditar_guias.mjs --workflows ../workflows
//   node tools/auditar_guias.mjs --red --propios      (también prueba los enlaces de la organización)
//
// Sale con código 1 si encuentra errores.

import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const opcion = (n) => args.includes(n);
const valor = (n) => { const i = args.indexOf(n); return i >= 0 ? args[i + 1] : undefined; };

const ORG = valor('--org') ?? 'nodo-cero-bo';
const REPOS = ['workflows', 'guias', 'proyectos', '.github', `${ORG}.github.io`];
const UTM = 'utm_source=nodo-cero&utm_medium=github&utm_campaign=hackathon-n8n-bolivia-2026';
const HOSTS_CON_UTM = ['core.app', 'build.avax.network', 'team1.network', 'www.team1.network', 'team1.blog', 'www.team1.blog'];
// Otros enlaces de Team1 que también se miden: su calendario de Luma y su Discord.
const RUTAS_CON_UTM = [/^https?:\/\/(?:lu\.ma|luma\.com)\/user\/usr-DrrXj8SDE9OLNi6/i, /^https?:\/\/discord\.gg\/team1\b/i];
const DIR_WORKFLOWS = valor('--workflows') ? path.resolve(valor('--workflows')) : null;

// Ids fijos de la especificación: las guías y la página los nombran así.
const WORKFLOWS = {
  '00-fundamentos': ['01-hola-n8n', '02-mi-primera-api', '03-http-request', '04-formulario', '05-agente-ia'],
  '10-avalanche-fuji': ['10-fuji-estado-de-la-red', '11-fuji-saldo-wallet', '12-fuji-leer-transaccion', '13-fuji-verificar-pago',
    '14-fuji-monitor-wallet', '15-fuji-token-erc20', '16-fuji-eventos-contrato'],
  '20-clerk': ['20-clerk-webhook-a-supabase', '21-clerk-api-protegida', '22-clerk-invitaciones'],
  '30-supabase': ['30-formulario-a-supabase', '31-api-crud-supabase', '32-cargar-documentos-rag', '33-agente-con-memoria-y-rag',
    '34-supabase-webhook-ia'],
  '40-proyectos': ['40-agente-web3-fuji', '41-pagos-fuji-con-login', '42-reporte-kpis'],
};
const EXTRAS = ['avalanche/contratos', 'clerk/app-ejemplo', 'supabase/sql'];

// ------------------------------------------------------------------ reglas de texto
const L = '[\\p{L}\\p{N}_]';
const palabra = (p) => new RegExp(`(?<!${L})(?:${p})(?!${L})`, 'giu');
// Nombres que la especificación no deja aparecer en ningún lado (ni en código ni en URLs).
// Van codificados para que este archivo tampoco los nombre.
const PROHIBIDAS = JSON.parse(Buffer.from(
  'W1siR0RHIiwiZ2RnIl0sWyJTZXJwQXBpIiwic2VycCA/YXBpIl0sWyJNZXJ1IiwibWVydSJdLFsiUWRyYW50IiwicWRyYW50Il0sWyJSZXNlbmQiLCJyZXNlbmQiXSxbIkNBSU5DTyIsImNhaW5jbyJdLFsiU3RlbGxhciIsInN0ZWxsYXIiXSxbIlJ1bWJvIiwicnVtYm8iXSxbIlRpbmthem8iLCJ0aW5rYXpvIl1d',
  'base64').toString('utf8')).map(([nombre, patron]) => [nombre, palabra(patron)]);
const FRASES = [
  ['«solo» (usá «nada más», «apenas» o reescribí la frase)', palabra('s[oó]lo')],
  ['«únicamente»', palabra('[uú]nicamente')],
  ['«exclusiva» (el evento es «enfocada en mujeres»)', palabra('exclusiv[oa]s?|exclusivamente')],
  ['«premio» (no se inventan premios)', palabra('premios?')],
  ['«cupón» (no se inventan cupones)', palabra('cup[oó]n(?:es)?')],
  ['«comunidad Nodo Cero»', /comunidad\s+nodo\s+cero/giu],
  ['atribución a una herramienta de IA', /(?:generad[oa]s?|hech[oa]s?|escrit[oa]s?|cread[oa]s?|redactad[oa]s?)\s+(?:con|por)\s+(?:una\s+|la\s+)?(?:ia|inteligencia artificial|chatgpt|claude|copilot|gemini)\b/giu],
  ['línea de coautoría', /co-authored-by/giu],
];
const EMOJI = /(?![©®™])[\p{Extended_Pictographic}\u{1F1E6}-\u{1F1FF}\u{FE0F}\u{20E3}]/gu;
const SECRETOS = [
  ['clave secreta (sk_test_/sk_live_)', /\bsk_(?:test|live)_[A-Za-z0-9]{16,}/g],
  ['clave de OpenAI', /\bsk-(?:proj-|svcacct-)?[A-Za-z0-9_-]{24,}/g],
  ['secreto de webhook (whsec_)', /\bwhsec_[A-Za-z0-9+/=]{16,}/g],
  ['token JWT', /\beyJ[A-Za-z0-9_-]{8,}\.eyJ[A-Za-z0-9_-]{8,}\.[A-Za-z0-9_-]{8,}/g],
  ['clave secreta de Supabase', /\bsb_secret_[A-Za-z0-9_-]{16,}/g],
  ['clave de Google', /\bAIza[0-9A-Za-z_-]{30,}/g],
  ['token de GitHub', /\b(?:ghp|gho|ghu|ghs|ghr)_[A-Za-z0-9]{30,}|\bgithub_pat_[A-Za-z0-9_]{40,}/g],
  ['clave privada PEM', /-----BEGIN (?:RSA |EC |OPENSSH |ENCRYPTED )?PRIVATE KEY-----/g],
];
const EMAIL = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g;
const EMAIL_OK = /@(?:example\.(?:com|org|net)|ejemplo\.(?:com|org)|users\.noreply\.github\.com)$/i;
const TELEFONO = /(?:\+\d{2,3}[\s.-]?)\(?\d{2,4}\)?[\s.-]?\d{3,4}[\s.-]?\d{3,4}|(?<![\d.,x])[67]\d{7}(?![\d.,])/g;

// Lo que no es prosa: código, comentarios, imágenes, URLs y el marcador de los avisos de GitHub (> [!NOTE]).
function prosa(md) {
  return md
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`\n]*`/g, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/^>\s*\[!(?:NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*$/gim, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/<(?:img|source)\b[^>]*>/gi, ' ')
    .replace(/\]\([^)]*\)/g, '] ')
    .replace(/(?:href|src|srcset)="[^"]*"/gi, ' ')
    .replace(/https?:\/\/[^\s)>"']+/g, ' ');
}

function recorte(t, i) {
  const a = Math.max(0, i - 30), b = Math.min(t.length, i + 40);
  return (a > 0 ? '…' : '') + t.slice(a, b).replace(/\s+/g, ' ').trim() + (b < t.length ? '…' : '');
}

function lineaDe(texto, indice) { return texto.slice(0, indice).split('\n').length; }

// ------------------------------------------------------------------ anclas como las arma GitHub
function slug(titulo) {
  return titulo
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/<[^>]+>/g, '')
    .replace(/[*`]/g, '')
    .trim()
    .toLowerCase()
    .replace(/[^\p{L}\p{M}\p{N}\p{Pc}\- ]/gu, '')
    .replace(/ /g, '-');
}
const cacheAnclas = new Map();
function anclasDe(archivo) {
  if (cacheAnclas.has(archivo)) return cacheAnclas.get(archivo);
  const md = fs.readFileSync(archivo, 'utf8').replace(/```[\s\S]*?```/g, '');
  const vistas = new Map();
  const set = new Set();
  for (const m of md.matchAll(/^#{1,6}\s+(.+?)\s*#*\s*$/gm)) {
    let s = slug(m[1]);
    const n = vistas.get(s) ?? 0;
    vistas.set(s, n + 1);
    if (n > 0) s = `${s}-${n}`;
    set.add(s);
  }
  for (const m of md.matchAll(/\b(?:id|name)="([^"]+)"/g)) set.add(m[1]);
  cacheAnclas.set(archivo, set);
  return set;
}

// ------------------------------------------------------------------ recorrido
function buscarMd(dir) {
  const out = [];
  (function rec(d) {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      if (['node_modules', '.git'].includes(e.name)) continue;
      const p = path.join(d, e.name);
      if (e.isDirectory()) rec(p);
      else if (/\.md$/i.test(e.name)) out.push(p);
    }
  })(dir);
  return out.sort();
}

const errores = [];
const avisos = [];
const externos = new Map(); // url -> [ubicaciones]
const rel = (p) => path.relative(RAIZ, p).split(path.sep).join('/');
const err = (archivo, linea, regla, detalle) => errores.push({ archivo: rel(archivo), linea, regla, detalle });
const aviso = (archivo, linea, regla, detalle) => avisos.push({ archivo: rel(archivo), linea, regla, detalle });

function revisarTexto(archivo, md) {
  const p = prosa(md);
  let m;
  if ((m = /[¡!]/.exec(p))) err(archivo, lineaDe(p, m.index), 'sin signos de exclamación', recorte(p, m.index));
  const emo = md.match(EMOJI);
  if (emo) err(archivo, lineaDe(md, md.search(EMOJI)), 'sin emojis', [...new Set(emo)].join(' '));
  for (const x of p.matchAll(/(?<![\p{L}\p{N}_@/.-])n8n(?![\p{L}\p{N}_])/giu)) {
    if (x[0] !== 'n8n') err(archivo, lineaDe(p, x.index), '«n8n» en minúscula', recorte(p, x.index));
  }
  for (const [nombre, re] of PROHIBIDAS) {
    re.lastIndex = 0;
    if ((m = re.exec(md))) err(archivo, lineaDe(md, m.index), `no se nombra ${nombre}`, recorte(md, m.index));
  }
  for (const [nombre, re] of FRASES) {
    re.lastIndex = 0;
    while ((m = re.exec(p))) err(archivo, lineaDe(p, m.index), `no va ${nombre}`, recorte(p, m.index));
  }
  for (const [nombre, re] of SECRETOS) {
    re.lastIndex = 0;
    if ((m = re.exec(md))) err(archivo, lineaDe(md, m.index), `parece una clave real: ${nombre}`, m[0].slice(0, 12) + '…');
  }
  for (const c of md.matchAll(EMAIL)) {
    if (!EMAIL_OK.test(c[0]) && !/\.(?:png|jpe?g|svg|webp)@/i.test(c[0])) err(archivo, lineaDe(md, c.index), 'sin correos personales', c[0]);
  }
  for (const t of p.matchAll(TELEFONO)) err(archivo, lineaDe(p, t.index), 'sin teléfonos', t[0]);
}

const ROTULOS = ['Para quién es', 'Qué vas a lograr', 'Tiempo estimado', 'Qué necesitás'];
function revisarEstructura(archivo, md) {
  const r = rel(archivo);
  const esReadme = /(^|\/)README\.md$/i.test(r);
  // Las guías empiezan con su título; un README puede abrir con la imagen de cabecera y tener el título después.
  if (esReadme) {
    if (!/^# .+/m.test(md.replace(/```[\s\S]*?```/g, ''))) err(archivo, 1, 'el README tiene un título «# …»', '');
  } else if (!/^# .+/m.test(md.split('\n').find((l) => l.trim()) ?? '')) {
    err(archivo, 1, 'la guía empieza con un título «# …»', '');
  }
  // El sitio toma como resumen el primer párrafo de texto: tiene que existir y ser corto.
  const parrafo = md.split(/\r?\n\r?\n/).map((x) => x.trim())
    .find((x) => x && !/^(#|!|<|\||>|```|-)/.test(x));
  if (!parrafo) aviso(archivo, 1, 'falta un párrafo de resumen después del título', '');
  else if (parrafo.length > 230) aviso(archivo, 1, 'el párrafo de resumen es largo (el sitio corta en 220)', `${parrafo.length} caracteres`);

  const esGuia = /^(00-empezar|proyectos)\/\d\d-/.test(r);
  if (!esGuia) {
    // Las demás páginas (ideas, presentar, seguir construyendo, recursos) también llevan la ficha y el cierre.
    if (esReadme) return;
    for (const rot of ROTULOS) if (!md.includes(`**${rot}**`)) err(archivo, 1, 'falta un rótulo de la ficha', rot);
    for (const t of ['## Si algo falla', '## Para seguir']) {
      if (!new RegExp(`^${t}\\b`, 'm').test(md)) err(archivo, 1, 'falta una sección', t);
    }
    return;
  }
  for (const rot of ROTULOS) if (!md.includes(`**${rot}**`)) err(archivo, 1, 'falta un rótulo de la ficha', rot);
  for (const t of ['## Pasos', '## Si algo falla', '## Para seguir']) {
    if (!new RegExp(`^${t}\\b`, 'm').test(md)) err(archivo, 1, 'falta una sección', t);
  }
  if (r.startsWith('proyectos/') && !/^## Cómo presentarlo en la demo/m.test(md)) err(archivo, 1, 'falta una sección', '## Cómo presentarlo en la demo');
  if (!/^\d+\.\s/m.test(md)) err(archivo, 1, 'los pasos van numerados', '');
}

function revisarEnlaceWorkflows(archivo, linea, ruta) {
  const partes = ruta.replace(/\/+$/, '').split('/').filter(Boolean);
  if (partes.length === 0) return;
  const [a, b] = partes;
  if (WORKFLOWS[a]) {
    if (b && !WORKFLOWS[a].includes(b)) err(archivo, linea, 'id de workflow desconocido', ruta);
  } else if (b && EXTRAS.includes(`${a}/${b}`)) {
    // carpeta extra del repo de workflows
  } else if (!['README.md', 'docs', 'LICENSE'].includes(a)) {
    err(archivo, linea, 'ruta desconocida en el repo de workflows', ruta);
  }
  if (DIR_WORKFLOWS && fs.existsSync(DIR_WORKFLOWS) && !fs.existsSync(path.join(DIR_WORKFLOWS, ...partes))) {
    err(archivo, linea, `no existe en ${path.basename(DIR_WORKFLOWS)}/`, ruta);
  }
}

function revisarEnlaces(archivo, md) {
  const sinCodigo = md.replace(/```[\s\S]*?```/g, (x) => x.replace(/[^\n]/g, ' ')).replace(/`[^`\n]*`/g, (x) => ' '.repeat(x.length));
  const encontrados = [];
  for (const m of sinCodigo.matchAll(/\]\(\s*<?([^)\s>]+)>?(?:\s+"[^"]*")?\s*\)/g)) encontrados.push([m[1], m.index]);
  for (const m of sinCodigo.matchAll(/\b(?:href|src)="([^"]+)"/g)) encontrados.push([m[1], m.index]);
  for (const m of sinCodigo.matchAll(/\bsrcset="([^"]+)"/g)) for (const s of m[1].split(',')) encontrados.push([s.trim().split(/\s+/)[0], m.index]);
  for (const m of sinCodigo.matchAll(/(?<![("=])\bhttps?:\/\/[^\s)<>"'`]+/g)) encontrados.push([m[0].replace(/[.,;:]+$/, ''), m.index]);

  for (const [url, idx] of encontrados) {
    const linea = lineaDe(md, idx);
    if (/^(mailto:|tel:)/i.test(url)) { err(archivo, linea, 'sin correos ni teléfonos en enlaces', url); continue; }
    if (/^https?:\/\//i.test(url)) {
      let u;
      try { u = new URL(url); } catch { err(archivo, linea, 'URL mal formada', url); continue; }
      if (!externos.has(url)) externos.set(url, []);
      externos.get(url).push(`${rel(archivo)}:${linea}`);
      if ((HOSTS_CON_UTM.includes(u.hostname) || RUTAS_CON_UTM.some((re) => re.test(url))) && !url.includes(UTM)) {
        err(archivo, linea, 'a este enlace le faltan los UTM de Team1', url);
      }
      if (u.hostname === 'github.com' && u.pathname.split('/')[1] === ORG) {
        const [, , repo, tipo, rama, ...resto] = u.pathname.split('/');
        if (repo && !REPOS.includes(repo)) err(archivo, linea, 'repo de la organización desconocido', repo);
        if (repo === 'workflows' && ['tree', 'blob'].includes(tipo)) {
          if (rama !== 'main') err(archivo, linea, 'la rama es main', url);
          revisarEnlaceWorkflows(archivo, linea, decodeURIComponent(resto.join('/')));
        }
      }
      if (u.hostname === 'raw.githubusercontent.com' && u.pathname.startsWith(`/${ORG}/workflows/main/`)) {
        const ruta = decodeURIComponent(u.pathname.replace(`/${ORG}/workflows/main/`, ''));
        if (!/\/workflow\.json$/.test(ruta)) aviso(archivo, linea, 'el enlace crudo para «Import from URL» apunta a un workflow.json', ruta);
        revisarEnlaceWorkflows(archivo, linea, ruta);
      }
      continue;
    }
    if (url.startsWith('#')) {
      if (!anclasDe(archivo).has(decodeURIComponent(url.slice(1)))) err(archivo, linea, 'ancla que no existe', url);
      continue;
    }
    const [ruta, ancla] = url.split('#');
    const destino = path.resolve(path.dirname(archivo), decodeURIComponent(ruta));
    if (!destino.startsWith(RAIZ)) { err(archivo, linea, 'enlace que sale del repo', url); continue; }
    if (!fs.existsSync(destino)) {
      if (rel(destino) === 'assets/cabecera.png') aviso(archivo, linea, 'falta la imagen de cabecera (la hace otro agente)', url);
      else err(archivo, linea, 'enlace interno roto', url);
      continue;
    }
    if (ancla && /\.md$/i.test(destino) && !anclasDe(destino).has(decodeURIComponent(ancla))) err(archivo, linea, 'ancla que no existe', url);
  }
}

// ------------------------------------------------------------------ red
async function verificarExternos() {
  const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36';
  const lista = [...externos.keys()].filter((u) => opcion('--propios') || !(
    new URL(u).hostname === `${ORG}.github.io` || u.includes(`github.com/${ORG}`) || u.includes(`githubusercontent.com/${ORG}/`)));
  const pedir = async (u, metodo) => {
    const ctl = new AbortController();
    const t = setTimeout(() => ctl.abort(), 25000);
    try {
      const r = await fetch(u, { method: metodo, redirect: 'follow', signal: ctl.signal, headers: { 'user-agent': UA, accept: 'text/html,*/*' } });
      return r.status;
    } catch { return 0; } finally { clearTimeout(t); }
  };
  // Algunos sitios rechazan el fetch de Node (protección contra robots) y responden bien a curl:
  // si fetch falla, se prueba con curl (HEAD y, si no, GET), siguiendo redirecciones.
  const conCurl = (u, metodo) => {
    const a = ['-s', '-L', '--max-time', '30', '-A', UA, '-o', os.devNull, '-w', '%{http_code}'];
    if (metodo === 'HEAD') a.push('-I');
    if (process.platform === 'win32') a.push('--ssl-no-revoke');
    a.push(u);
    const r = spawnSync('curl', a, { encoding: 'utf8' });
    return Number((r.stdout ?? '').trim()) || 0;
  };
  const falla = (s) => s === 0 || s >= 400;
  let i = 0;
  const resultados = [];
  await Promise.all(Array.from({ length: 8 }, async () => {
    while (i < lista.length) {
      const u = lista[i++];
      let s = await pedir(u, 'HEAD');
      if (falla(s)) s = await pedir(u, 'GET');
      if (falla(s)) s = conCurl(u, 'HEAD');
      if (falla(s)) s = conCurl(u, 'GET');
      resultados.push([u, s]);
    }
  }));
  for (const [u, s] of resultados.sort()) {
    if (s === 0 || s >= 400) errores.push({ archivo: externos.get(u)[0], linea: '', regla: `enlace externo que no responde (${s || 'sin respuesta'})`, detalle: u });
  }
  return resultados.length;
}

// ------------------------------------------------------------------ main
const archivos = buscarMd(RAIZ);
for (const a of archivos) {
  const md = fs.readFileSync(a, 'utf8');
  revisarTexto(a, md);
  revisarEstructura(a, md);
  revisarEnlaces(a, md);
}
let probados = 0;
if (opcion('--red')) probados = await verificarExternos();

for (const x of avisos) console.log(`aviso  ${x.archivo}:${x.linea}  ${x.regla}${x.detalle ? `  «${x.detalle}»` : ''}`);
for (const x of errores) console.log(`error  ${x.archivo}${x.linea ? `:${x.linea}` : ''}  ${x.regla}${x.detalle ? `  «${x.detalle}»` : ''}`);
console.log(`\n${archivos.length} archivos, ${externos.size} enlaces externos distintos${opcion('--red') ? ` (${probados} probados en vivo)` : ''}: ${errores.length} errores, ${avisos.length} avisos.`);
process.exit(errores.length ? 1 : 0);

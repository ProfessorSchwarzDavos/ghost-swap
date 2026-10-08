// Zero-dependency server: serves public/ and replays the captured API snapshots.
// Railway sets PORT. Run locally with: node server.js
const http = require('http');
const fs = require('fs');
const path = require('path');
const PUBLIC = path.join(__dirname, 'public');
const SNAP = path.join(__dirname, 'snapshots');
const index = fs.existsSync(path.join(SNAP, 'index.json')) ? JSON.parse(fs.readFileSync(path.join(SNAP, 'index.json'), 'utf8')) : {};
const MIME = { '.html': 'text/html; charset=utf-8', '.js': 'application/javascript; charset=utf-8', '.mjs': 'application/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.gif': 'image/gif', '.webp': 'image/webp', '.avif': 'image/avif', '.ico': 'image/x-icon', '.woff': 'font/woff', '.woff2': 'font/woff2', '.ttf': 'font/ttf', '.otf': 'font/otf', '.mp4': 'video/mp4', '.webm': 'video/webm', '.mp3': 'audio/mpeg', '.wasm': 'application/wasm', '.txt': 'text/plain; charset=utf-8', '.xml': 'application/xml', '.webmanifest': 'application/manifest+json' };

// Fallbacks: any saved page-data (RSC) response for the same route, any saved size of the same optimized image.
const alt = { rsc: {}, img: {} };
for (const [key, v] of Object.entries(index)) {
  const u = new URL(key.slice(4), 'http://x');
  if (u.searchParams.has('_rsc') || /x-component/.test(v.type)) alt.rsc[u.pathname] = alt.rsc[u.pathname] || v;
  if (u.pathname === '/_next/image') alt.img[u.searchParams.get('url')] = alt.img[u.searchParams.get('url')] || v;
}
const byPath = (kind, k) => alt[kind][k] || null;

function send(res, status, type, body, cache) {
  res.writeHead(status, { 'Content-Type': type, 'Cache-Control': cache || 'no-cache', 'X-Content-Type-Options': 'nosniff' });
  res.end(body);
}
function fileFor(p) {
  let rel = decodeURIComponent(p).replace(/^\/+/, '');
  const full = path.normalize(path.join(PUBLIC, rel));
  if (!full.startsWith(PUBLIC)) return null;
  for (const c of [full, path.join(full, 'index.html'), full + '.html']) {
    try { if (fs.statSync(c).isFile()) return c; } catch {}
  }
  return null;
}

http.createServer((req, res) => {
  const u = new URL(req.url, 'http://x');
  if (u.pathname === '/healthz') return send(res, 200, 'application/json', '{"ok":true}');
  const isRsc = !!req.headers['rsc'] || u.searchParams.has('_rsc');
  let snap = index['GET ' + u.pathname + u.search];
  if (!snap && isRsc) snap = byPath('rsc', u.pathname);
  if (!snap && u.pathname === '/_next/image') snap = byPath('img', u.searchParams.get('url'));
  if (!snap && !isRsc && !u.search) snap = index['GET ' + u.pathname];
  if (isRsc && !snap) return send(res, 404, 'text/plain', 'Not found');
  if (req.method === 'GET' && snap) {
    return send(res, snap.status || 200, snap.type || 'application/json', fs.readFileSync(path.join(SNAP, snap.file)));
  }
  if (u.pathname.startsWith('/api/')) {
    if (req.method !== 'GET') return send(res, 501, 'application/json', JSON.stringify({ error: 'This preview copy is read-only.' }));
    return send(res, 404, 'application/json', JSON.stringify({ error: 'Not found.' }));
  }
  const f = fileFor(u.pathname);
  if (f) return send(res, 200, MIME[path.extname(f).toLowerCase()] || 'application/octet-stream', fs.readFileSync(f), f.endsWith('.html') ? 'no-cache' : 'public, max-age=3600');
  if (!path.extname(u.pathname)) { const i = fileFor('/'); if (i) return send(res, 200, MIME['.html'], fs.readFileSync(i)); }
  send(res, 404, 'text/plain', 'Not found');
}).listen(process.env.PORT || 3000, () => console.log('Site running on port ' + (process.env.PORT || 3000)));

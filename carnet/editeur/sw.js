// Service worker de l'éditeur Carnet public (spdyn1.github.io/carnet/editeur/) : l'appli s'ouvre aussi sans réseau.
// Page = réseau d'abord (les mises à jour arrivent), cache en secours ; le reste (icônes, manifeste) = cache d'abord.
const CACHE = "carnet-editeur-v1";
const FICHIERS = ["./", "manifest.webmanifest", "icone-180.png", "icone-192.png", "icone-512.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FICHIERS)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  const r = e.request;
  if (r.method !== "GET" || new URL(r.url).origin !== location.origin) return;
  if (r.mode === "navigate") {
    e.respondWith(fetch(r).then(rep => { const copie = rep.clone(); caches.open(CACHE).then(c => c.put("./", copie)); return rep; }).catch(() => caches.match("./")));
  } else {
    e.respondWith(caches.match(r).then(c => c || fetch(r)));
  }
});

/** An empty service worker! */
const cacheName = 'pwa-todo';
const staticAssets = [
  './',
  './index.html',
  './app.js',
  './styles.css',
  './img/icons/icon-512x512.png'
];

self.addEventListener('install', async event => {
  const cache = await caches.open(cacheName); 
  await cache.addAll(staticAssets); 
});


self.addEventListener('fetch', event => {
  const req = event.request;
  event.respondWith(cacheFirst(req));
});

async function cacheFirst(req) {
  const cache = await caches.open(cacheName); 
  const cachedResponse = await cache.match(req); 
  return cachedResponse || fetch(req); 
}
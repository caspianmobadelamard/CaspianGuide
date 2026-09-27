/* ============================================
   Service Worker — CaspianGuide PWA
   ============================================ */

const CACHE_NAME = 'caspian-guide-v1';
const BASE_PATH = self.location.pathname.replace(/\/sw\.js$/, '');

const URLS_TO_CACHE = [
  `${BASE_PATH}/`,
  `${BASE_PATH}/index.html`,
  `${BASE_PATH}/manifest.webmanifest`,
  `${BASE_PATH}/assets/icon-192.png`,
  `${BASE_PATH}/assets/icon-512.png`,
  `${BASE_PATH}/assets/apple-touch-icon.png`,
];

/* نصب */
self.addEventListener('install', (event) => {
  console.log('📦 [SW] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(URLS_TO_CACHE).catch((err) => {
        console.warn('⚠️ [SW] Some files failed to cache:', err);
      });
    })
  );
  self.skipWaiting();
});

/* فعال‌سازی */
self.addEventListener('activate', (event) => {
  console.log('✅ [SW] Activating...');
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key.startsWith('caspian-guide-') && key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

/* Fetch — Network First */
self.addEventListener('fetch', (event) => {
  const { request } = event;

  if (request.method !== 'GET') return;
  if (!request.url.startsWith('http')) return;

  event.respondWith(
    fetch(request)
      .then((response) => {
        if (response && response.status === 200 && response.type === 'basic') {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseClone);
          });
        }
        return response;
      })
      .catch(() => {
        return caches.match(request).then((cached) => {
          if (cached) return cached;
          if (request.headers.get('accept')?.includes('text/html')) {
            return caches.match(`${BASE_PATH}/index.html`);
          }
          return new Response('Offline', { status: 503 });
        });
      })
  );
});
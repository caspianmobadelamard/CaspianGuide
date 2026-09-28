/* ============================================
   Service Worker — CaspianGuide PWA
   ============================================ */

const CACHE_VERSION = 'caspian-guide-v5';
const CACHE_NAME = CACHE_VERSION;

/* ============================================
   نصب — Cache کردن فایل‌های حیاتی
   ============================================ */
self.addEventListener('install', (event) => {
  console.log('📦 [SW] Installing v5...');

  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // فقط فایل‌های ضروری
      return cache.addAll([
        '/CaspianGuide/',
        '/CaspianGuide/manifest.webmanifest',
        '/CaspianGuide/assets/icon-192.png',
        '/CaspianGuide/assets/icon-512.png'
      ]).catch((err) => {
        console.warn('⚠️ [SW] Some files failed to cache:', err);
      });
    })
  );

  // فوراً فعال بشه
  self.skipWaiting();
});

/* ============================================
   فعال‌سازی — پاک کردن کش‌های قدیمی
   ============================================ */
self.addEventListener('activate', (event) => {
  console.log('✅ [SW] Activating v5...');

  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key.startsWith('caspian-guide-') && key !== CACHE_NAME)
          .map((key) => {
            console.log('🗑️ [SW] Deleting old cache:', key);
            return caches.delete(key);
          })
      );
    })
  );

  // فوراً کنترل کلاینت‌ها رو بگیر
  self.clients.claim();
});

/* ============================================
   Fetch — Network First, Cache Fallback
   ⚠️ این handler برای نصب PWA حیاتی است
   ============================================ */
self.addEventListener('fetch', (event) => {
  const { request } = event;

  // فقط GET
  if (request.method !== 'GET') return;

  // فقط http/https
  if (!request.url.startsWith('http')) return;

  // Google Fonts — Cache First
  if (request.url.includes('fonts.googleapis.com') ||
      request.url.includes('fonts.gstatic.com')) {
    event.respondWith(
      caches.match(request).then((cached) => {
        return cached || fetch(request).then((response) => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          return response;
        });
      })
    );
    return;
  }

  // بقیه — Network First
  event.respondWith(
    fetch(request)
      .then((response) => {
        // فقط پاسخ‌های موفق را کش کن
        if (response && response.status === 200 && response.type === 'basic') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, clone);
          });
        }
        return response;
      })
      .catch(() => {
        // اگه شبکه نبود، از کش برگردان
        return caches.match(request).then((cached) => {
          if (cached) return cached;

          // اگه HTML بود، index رو برگردان
          if (request.headers.get('accept')?.includes('text/html')) {
            return caches.match('/CaspianGuide/');
          }

          return new Response('Offline', { status: 503 });
        });
      })
  );
});

/* ============================================
   پیام از کلاینت
   ============================================ */
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
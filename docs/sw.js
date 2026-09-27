/* ============================================
   Service Worker — CaspianGuide PWA
   نسخه ۲ — مسیرهای نسبی و استراتژی Network-First
   ============================================ */

const CACHE_VERSION = 'caspian-guide-v2';
const CACHE_NAME = `${CACHE_VERSION}-${Date.now()}`;

// مسیرهای نسبی برای پشتیبانی از هر دامنه‌ای
const BASE_PATH = self.location.pathname.replace(/\/sw\.js$/, '');
const URLS_TO_CACHE = [
  `${BASE_PATH}/`,
  `${BASE_PATH}/index.html`,
  `${BASE_PATH}/manifest.webmanifest`,
];

/* ============================================
   نصب Service Worker
   ============================================ */
self.addEventListener('install', (event) => {
  console.log('📦 [SW] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('📦 [SW] Caching app shell');
      return cache.addAll(URLS_TO_CACHE).catch((err) => {
        console.warn('⚠️ [SW] Some files failed to cache:', err);
      });
    })
  );
  self.skipWaiting();
});

/* ============================================
   فعال‌سازی — پاک کردن کش‌های قدیمی
   ============================================ */
self.addEventListener('activate', (event) => {
  console.log('✅ [SW] Activating...');
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
  self.clients.claim();
});

/* ============================================
   استراتژی Fetch — Network First (برای مستندات)
   ============================================ */
self.addEventListener('fetch', (event) => {
  const { request } = event;

  // فقط درخواست‌های GET را کش کن
  if (request.method !== 'GET') return;

  // درخواست‌های Chrome Extension را نادیده بگیر
  if (!request.url.startsWith('http')) return;

  // فایل‌های خاص (مثل Google Fonts) — مستقیم از شبکه
  if (request.url.includes('fonts.googleapis.com') ||
      request.url.includes('fonts.gstatic.com')) {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) => {
        return cache.match(request).then((cached) => {
          const fetchPromise = fetch(request).then((response) => {
            cache.put(request, response.clone());
            return response;
          }).catch(() => cached);
          return cached || fetchPromise;
        });
      })
    );
    return;
  }

  // برای بقیه — Network First (چون مستندات مدام آپدیت می‌شن)
  event.respondWith(
    fetch(request)
      .then((response) => {
        // فقط پاسخ‌های موفق را کش کن
        if (response && response.status === 200 && response.type === 'basic') {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseClone);
          });
        }
        return response;
      })
      .catch(() => {
        // اگه شبکه نبود، از کش برگردان
        return caches.match(request).then((cached) => {
          if (cached) return cached;
          // اگه صفحه HTML بود، صفحه اصلی را برگردان
          if (request.headers.get('accept')?.includes('text/html')) {
            return caches.match(`${BASE_PATH}/index.html`);
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

/* ============================================
   یادآوری: ثبت Service Worker
   ============================================
   این کد باید در HTML ثبت بشه (یا از طریق MkDocs Material خودکار انجام می‌شه):

   if ('serviceWorker' in navigator) {
     window.addEventListener('load', () => {
       navigator.serviceWorker.register('/sw.js')
         .then((reg) => console.log('✅ SW registered:', reg.scope))
         .catch((err) => console.warn('⚠️ SW registration failed:', err));
     });
   }
   ============================================ */
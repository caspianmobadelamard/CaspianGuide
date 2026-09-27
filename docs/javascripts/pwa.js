/* ============================================
   PWA Registration — CaspianGuide
   نسخه ۲ — با اطلاع‌رسانی به کاربر برای آپدیت
   ============================================ */

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/CaspianGuide/sw.js', {
      scope: '/CaspianGuide/'
    })
      .then((reg) => {
        console.log('✅ [PWA] Service Worker registered:', reg.scope);

        // چک آپدیت SW هر ۱ ساعت
        setInterval(() => {
          reg.update().catch((err) => console.warn('SW update failed:', err));
        }, 60 * 60 * 1000);

        // اطلاع‌رسانی برای آپدیت جدید
        reg.addEventListener('updatefound', () => {
          const newWorker = reg.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                showUpdateNotification();
              }
            });
          }
        });
      })
      .catch((err) => {
        console.warn('⚠️ [PWA] Service Worker registration failed:', err);
      });
  });
}

/* ============================================
   نمایش نوتیفیکیشن آپدیت
   ============================================ */
function showUpdateNotification() {
  const toast = document.createElement('div');
  toast.className = 'pwa-update-toast';
  toast.innerHTML = `
    <span>🚀 نسخه جدید در دسترس است</span>
    <button onclick="location.reload(true)">به‌روزرسانی</button>
  `;
  document.body.appendChild(toast);
}

/* ============================================
   Apple Touch Icon + Meta Tags (برای iOS)
   ============================================ */
(function addAppleMetaTags() {
  const tags = [
    { rel: 'apple-touch-icon', href: '/CaspianGuide/assets/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/CaspianGuide/assets/icon-192.png' },
    { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/CaspianGuide/assets/icon-512.png' }
  ];

  tags.forEach((tag) => {
    const link = document.createElement('link');
    Object.keys(tag).forEach((key) => (link[key] = tag[key]));
    document.head.appendChild(link);
  });

  const metas = [
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
    { name: 'apple-mobile-web-app-title', content: 'کاسپین' },
    { name: 'mobile-web-app-capable', content: 'yes' },
    { name: 'theme-color', content: '#00e5ff' },
    { name: 'application-name', content: 'راهنمای کاسپین' }
  ];

  metas.forEach((meta) => {
    const m = document.createElement('meta');
    m.name = meta.name;
    m.content = meta.content;
    document.head.appendChild(m);
  });
})();

/* ============================================
   تشخیص حالت standalone
   ============================================ */
if (window.matchMedia('(display-mode: standalone)').matches ||
    window.navigator.standalone === true) {
  document.documentElement.classList.add('pwa-mode');
  console.log('📱 [PWA] Running in standalone mode');
}
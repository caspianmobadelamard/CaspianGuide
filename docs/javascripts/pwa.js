/* ============================================
   PWA Registration — CaspianGuide
   ============================================ */

(function() {
  'use strict';

  // ⚠️ ثبت Service Worker — حیاتی برای PWA
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/CaspianGuide/sw.js', {
        scope: '/CaspianGuide/'
      })
      .then(function(registration) {
        console.log('✅ [PWA] Service Worker registered:', registration.scope);

        // چک آپدیت هر ۱ ساعت
        setInterval(function() {
          registration.update().catch(function(err) {
            console.warn('SW update failed:', err);
          });
        }, 60 * 60 * 1000);

        // گوش دادن به آپدیت جدید
        registration.addEventListener('updatefound', function() {
          var newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', function() {
              if (newWorker.state === 'installed' &&
                  navigator.serviceWorker.controller) {
                showUpdateNotification();
              }
            });
          }
        });
      })
      .catch(function(err) {
        console.error('❌ [PWA] Service Worker registration failed:', err);
      });
    });
  } else {
    console.warn('⚠️ [PWA] Service Worker not supported');
  }

  // ============================================
  // نمایش توست آپدیت
  // ============================================
  function showUpdateNotification() {
    var toast = document.createElement('div');
    toast.className = 'pwa-update-toast';
    toast.innerHTML = '<span>🚀 نسخه جدید در دسترس است</span>' +
                     '<button onclick="location.reload(true)">به‌روزرسانی</button>';
    document.body.appendChild(toast);

    setTimeout(function() {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 10000);
  }

  // ============================================
  // Meta Tags برای iOS و Android
  // ============================================
  function addMetaTags() {
    var tags = [
      { rel: 'apple-touch-icon', href: '/CaspianGuide/assets/icon-192.png' },
      { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/CaspianGuide/assets/icon-192.png' },
      { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/CaspianGuide/assets/icon-512.png' }
    ];

    tags.forEach(function(tag) {
      var link = document.createElement('link');
      Object.keys(tag).forEach(function(key) {
        link[key] = tag[key];
      });
      document.head.appendChild(link);
    });

    var metas = [
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      { name: 'apple-mobile-web-app-title', content: 'کاسپین' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'theme-color', content: '#f5b942' },
      { name: 'application-name', content: 'راهنمای کاسپین' }
    ];

    metas.forEach(function(meta) {
      var m = document.createElement('meta');
      m.name = meta.name;
      m.content = meta.content;
      document.head.appendChild(m);
    });
  }

  // اضافه کردن meta tags
  if (document.head) {
    addMetaTags();
  } else {
    document.addEventListener('DOMContentLoaded', addMetaTags);
  }

  // ============================================
  // تشخیص حالت standalone
  // ============================================
  function checkStandalone() {
    var isStandalone = window.matchMedia('(display-mode: standalone)').matches ||
                       window.navigator.standalone === true;

    if (isStandalone) {
      document.documentElement.classList.add('pwa-mode');
      console.log('📱 [PWA] Running in standalone mode');
    }
  }

  checkStandalone();
})();
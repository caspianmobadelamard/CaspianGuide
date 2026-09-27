/* ============================================
   PWA Registration — CaspianGuide
   ============================================ */

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/CaspianGuide/sw.js', {
      scope: '/CaspianGuide/'
    })
      .then((reg) => {
        console.log('✅ [PWA] Service Worker registered:', reg.scope);
      })
      .catch((err) => {
        console.warn('⚠️ [PWA] Service Worker registration failed:', err);
      });
  });
}

/* ============================================
   Apple Touch Icon (برای iOS)
   ============================================ */
(function addAppleTouchIcon() {
  const link = document.createElement('link');
  link.rel = 'apple-touch-icon';
  link.href = '/CaspianGuide/assets/apple-touch-icon.png';
  document.head.appendChild(link);

  const meta1 = document.createElement('meta');
  meta1.name = 'apple-mobile-web-app-capable';
  meta1.content = 'yes';
  document.head.appendChild(meta1);

  const meta2 = document.createElement('meta');
  meta2.name = 'apple-mobile-web-app-status-bar-style';
  meta2.content = 'black-translucent';
  document.head.appendChild(meta2);

  const meta3 = document.createElement('meta');
  meta3.name = 'apple-mobile-web-app-title';
  meta3.content = 'کاسپین';
  document.head.appendChild(meta3);

  const meta4 = document.createElement('meta');
  meta4.name = 'theme-color';
  meta4.content = '#00e5ff';
  document.head.appendChild(meta4);
})();
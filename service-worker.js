self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v2').then((cache) => {
      return cache.addAll([
        '/ytadfree/index.html',
        '/ytadfree/manifest.json',
        '/ytadfree/ytlogo192.png',
        '/ytadfree/ytlogo144.png',
        '/ytadfree/ytlogo512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
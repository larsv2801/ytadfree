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
  const url = new URL(event.request.url);

  if (url.pathname === '/ytadfree' && url.searchParams.has('url')) {
    return event.respondWith(fetch(event.request));
  }

  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

const cacheName = "kisan-sarathi-v1";
const assetsToCache = [
  "./index.html",
  "./manifest.json",
  "https://cdn-icons-png.flaticon.com/512/616/616408.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(assetsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request))
  );
});

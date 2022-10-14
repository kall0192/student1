const cacheName = 'cache-students';

//Når websitet indlæses, cache ressourcer nævnt i listen
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(['/student/', '/student/index.html', '/students/members.json', '/students/javascript.js', '/students/manifest.json', '/student/morten.png', '/student/nina.png', '/student/olivia.png', ]);
    })
  );
});
//Hvis ressource ikke er tilgængelig online, så søg i cachen
self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(() =>
      caches.open(cacheName).then(cache => cache.match(event.request))
    )
  );
});
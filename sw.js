// Service Worker for FitTrack Pro PWA
const CACHE_NAME = 'fittrack-v1';
const urlsToCache = [
    './',
    './index.html',
    './styles.css',
    './app.js',
    './manifest.json'
];

// Install event
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(urlsToCache);
            })
            .catch((error) => {
                console.log('Cache failed:', error);
            })
    );
});

// Fetch event
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // Return cached version or fetch from network
                if (response) {
                    return response;
                }
                return fetch(event.request).then((response) => {
                    // Don't cache non-success responses
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }
                    // Clone and cache the response
                    const responseToCache = response.clone();
                    caches.open(CACHE_NAME)
                        .then((cache) => {
                            cache.put(event.request, responseToCache);
                        });
                    return response;
                });
            })
            .catch(() => {
                // Offline fallback
                return caches.match('./index.html');
            })
    );
});

// Activate event
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.filter((cacheName) => {
                    return cacheName !== CACHE_NAME;
                }).map((cacheName) => {
                    return caches.delete(cacheName);
                })
            );
        })
    );
});

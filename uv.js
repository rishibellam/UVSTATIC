importScripts('https://cdn.jsdelivr.net/gh/rishibellam/UVSTATIC/uv/uv.bundle.js');
importScripts('https://cdn.jsdelivr.net/gh/rishibellam/UVSTATIC/uv/uv.config.js');
importScripts('https://cdn.jsdelivr.net/gh/rishibellam/UVSTATIC/uv/uv.sw.js');
importScripts('https://arc.io/arc-sw-core.js');

const sw = new UVServiceWorker();

self.addEventListener('fetch', (event) => event.respondWith(sw.fetch(event)));

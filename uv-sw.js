importScripts("https://cdn.jsdelivr.net/gh/rishibellam/UVSTATIC/uv/uv.sw.js");

const sw = new UVServiceWorker();

self.addEventListener("fetch", (event) => event.respondWith(sw.fetch(event)));

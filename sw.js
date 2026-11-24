importScripts('/notes-for-physics/uv/uv.bundle.js');
importScripts('/notes-for-physics/uv/uv.config.js');
importScripts('/notes-for-physics/uv/uv.sw.js');

const sw = new UVServiceWorker();

self.addEventListener('fetch', event =>
    event.respondWith(
        sw.fetch(event)
    )
);

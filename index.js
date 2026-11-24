const form = document.querySelector('form');
const input = document.querySelector('input');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    try {
        await navigator.serviceWorker.register('/notes-for-physics/sw.js', {
            scope: '/notes-for-physics/uv/service/'
        });
    } catch (err) {
        console.error('SW registration failed:', err);
    }

    let url = input.value.trim();
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'https://' + url;
    }

    window.location.href = '/notes-for-physics/uv/service/' + __uv$config.encodeUrl(url);
});

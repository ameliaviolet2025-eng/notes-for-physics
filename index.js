const form = document.querySelector('form');
const input = document.querySelector('input');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    await navigator.serviceWorker.register('/notes-for-physics/sw.js', {
        scope: '/notes-for-physics/uv/service/'
    });
    await navigator.serviceWorker.ready;

    let url = input.value.trim();
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'https://' + url;
    }

    window.location.href = '/notes-for-physics/uv/service/' + __uv$config.encodeUrl(url);
});

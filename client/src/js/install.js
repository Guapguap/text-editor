const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// When the browser fires the beforeinstallprompt event
// that's the indication that the PWA can be installed and an install button can be shown to the user. 
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;

    butInstall.classList.toggle('hidden', false);
});

// 
butInstall.addEventListener('click', async () => {

    if (!window.deferredPrompt){
        return;
    }

    window.deferredPrompt.prompt();

    window.deferredPrompt = null;

    butInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {});

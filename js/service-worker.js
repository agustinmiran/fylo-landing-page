if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then(function (registro) {
            console.log('Service worker Registrado:', registro);
        })
        .catch(function (error) {
            console.log('Service worker Registro fallido:', error);
        })
}
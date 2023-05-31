self.addEventListener('install', function (event) {
	event.waitUntil(caches.open('almacenamiento-v1').then((cache) => {
		cache.addAll([
			"/index.html",
			"/css/index.css",
			"images/avatar-testimonial.jpg",
			"images/bg-curve-desktop.svg",
			"images/bg-curve-mobile.svg",
			"images/favicon-32x32.png",
			"images/icon-arrow.svg",
			"images/icon-email.svg",
			"images/icon-phone.svg",
			"images/icon-quotes.svg",
			"images/illustration-1.svg",
			"images/illustration-2.svg",
			"images/logo.svg",
		]);
	}));
});
self.addEventListener("fetch", e => {
	e.respondWith(fetch("http://127.0.0.1:5500/index.html?/").then(_ => fetch(e.request))
	)
});
self.addEventListener("install", event => {
  event.waitUntil(caches.open("redalert-v1").then(cache => cache.addAll([
    "./", "./index.html", "./styles.css", "./app.js", "./manifest.webmanifest", "./icon.svg"
  ])));
  self.skipWaiting();
});
self.addEventListener("activate", event => event.waitUntil(self.clients.claim()));
self.addEventListener("fetch", event => {
  if (event.request.method === "GET") {
    event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request)));
  }
});
self.addEventListener("push", event => {
  let data = {};
  try { data = event.data.json(); } catch (_) { data = { title: "Cartão vermelho!", body: event.data?.text() || "Foi detetada uma expulsão." }; }
  event.waitUntil(self.registration.showNotification(data.title || "🔴 Cartão vermelho!", {
    body: data.body || "Foi detetada uma expulsão.",
    icon: "./icon.svg",
    badge: "./icon.svg",
    tag: data.tag || "redalert-card",
    data: { url: data.url || "./" }
  }));
});
self.addEventListener("notificationclick", event => {
  event.notification.close();
  event.waitUntil(clients.openWindow(event.notification.data?.url || "./"));
});
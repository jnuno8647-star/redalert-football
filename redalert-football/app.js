const notifyBtn = document.querySelector("#notifyBtn");
const testBtn = document.querySelector("#testBtn");
const statusText = document.querySelector("#notifyStatus");

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(() => {
    statusText.textContent = "Não foi possível registar o service worker. Confirma que a aplicação está publicada em HTTPS.";
  }));
}

notifyBtn.addEventListener("click", async () => {
  if (!("Notification" in window)) {
    statusText.textContent = "Este navegador não suporta notificações. No iPhone, instala primeiro a aplicação no ecrã principal e abre-a por esse ícone.";
    return;
  }
  const permission = await Notification.requestPermission();
  statusText.textContent = permission === "granted"
    ? "Permissão concedida. Falta ligar o serviço de notificações push para receber alertas reais."
    : "As notificações não foram autorizadas. Podes ativá-las nas definições do iPhone.";
});

testBtn.addEventListener("click", async () => {
  if (!("Notification" in window) || Notification.permission !== "granted") {
    statusText.textContent = "Ativa primeiro as notificações no botão acima.";
    return;
  }
  if ("serviceWorker" in navigator) {
    const reg = await navigator.serviceWorker.ready;
    await reg.showNotification("RedAlert Football — teste", {
      body: "As notificações locais estão a funcionar. Os alertas reais ainda precisam da API e do servidor.",
      icon: "./icon.svg",
      badge: "./icon.svg",
      tag: "redalert-test"
    });
  } else {
    new Notification("RedAlert Football — teste", { body: "Notificação de teste." });
  }
});
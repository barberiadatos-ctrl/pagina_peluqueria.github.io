self.addEventListener("install", () => {
  console.log("💈 Service Worker instalado correctamente");
});

self.addEventListener("fetch", () => {
  // Puedes cachear archivos aquí si lo deseas
});

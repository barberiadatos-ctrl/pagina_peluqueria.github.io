self.addEventListener("install", event => {
  console.log("Service Worker instalado");
});

self.addEventListener("fetch", event => {
  // Permite cargar la app offline si quieres en el futuro
});

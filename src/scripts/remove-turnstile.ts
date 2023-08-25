document.addEventListener("astro:beforeload", removeTurnstile);
function removeTurnstile() {
  if (window._turnstile_widget_id) {
    window.turnstile.remove(window._turnstile_widget_id);
    delete window._turnstile_widget_id;
  }
}

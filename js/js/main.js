// Navigation entre pages
function goToPage(id) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// Mode invité
function guestMode() {
  alert("Mode invité activé (progression locale).");
  goToPage("languages");
}

// Au démarrage → charger traduction
window.addEventListener("DOMContentLoaded", () => {
  initI18n();
});

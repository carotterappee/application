// --- Navigation entre sections
function goToPage(id) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  const el = document.getElementById(id);
  if (el) el.classList.add("active");
  else console.warn("Section introuvable:", id);
}

// --- Mode invité
function guestMode() {
  alert("Mode invité : progression enregistrée seulement sur cet appareil.");
  goToPage("languages");
}

// --- Niveau
function startBeginner() {
  // TODO: initialiser progression débutant
  goToPage("dashboard");
}
function startPlacement() {
  // TODO: afficher test de positionnement
  alert("Test de niveau à venir (placeholder)");
  goToPage("dashboard");
}

// --- Changer la langue UI via select header
function changeUiLang(langCode) {
  localStorage.setItem("uiLang", langCode);
  initI18n(); // recharge les libellés
}

// --- Démarrage
window.addEventListener("DOMContentLoaded", () => {
  // sécurité: activer au moins la page d'accueil
  goToPage("welcome");
  initI18n().catch((e) => {
    console.error("Erreur i18n au démarrage:", e);
  });
});

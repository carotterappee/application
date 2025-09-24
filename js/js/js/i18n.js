async function initI18n() {
  // Détection langue du navigateur
  const lang = navigator.language.startsWith("fr") ? "fr" : "en";
  const data = await fetch(`i18n/${lang}.json`).then(res => res.json());

  // Injecter traductions
  document.getElementById("welcome-title").textContent = data.welcome.title;
  document.getElementById("welcome-subtitle").textContent = data.welcome.subtitle;
  document.getElementById("lang-select-title").textContent = data.languages.title;
}

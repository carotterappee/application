async function initI18n() {
  // Langue choisie manuellement ?
  const manual = localStorage.getItem("uiLang");
  const inferred = navigator.language?.toLowerCase().startsWith("fr") ? "fr" : "en";
  const lang = manual || inferred;

  // Mettre le select au bon état
  const sel = document.getElementById("ui-lang");
  if (sel) sel.value = lang;

  // Charger le JSON
  let data;
  try {
    const res = await fetch(`i18n/${lang}.json`, { cache: "no-store" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    data = await res.json();
  } catch (err) {
    console.warn("i18n: chargement échoué, fallback FR. Détail:", err);
    const res2 = await fetch(`i18n/fr.json`);
    data = await res2.json();
  }

  // Appliquer les textes si présents, sinon garder les valeurs par défaut du HTML
  setText("welcome-title", data?.welcome?.title);
  setText("welcome-subtitle", data?.welcome?.subtitle);
  setText("login-title", data?.auth?.login_title);
  setText("signup-title", data?.auth?.signup_title);
  setText("lang-select-title", data?.languages?.title);
  setText("lbl-native", data?.languages?.native_label);
  setText("lbl-target", data?.languages?.target_label);
  setText("level-title", data?.level?.title);
  setText("btn-login", data?.auth?.login_btn);
  setText("btn-signup", data?.auth?.signup_btn);
  setText("btn-guest", data?.auth?.guest_btn);
  setText("btn-beginner", data?.level?.beginner_btn);
  setText("btn-hasbasics", data?.level?.hasbasics_btn);
  setText("dash-title", data?.dashboard?.title);
  setText("dash-sub", data?.dashboard?.subtitle);
}

function setText(id, value) {
  if (!value) return;
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

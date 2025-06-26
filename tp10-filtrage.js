/* ------------------  CONSTANTES  ------------------ */
const URL = "https://digicode.cleverapps.io/json/pays/pollution";

let paysBrut = [];          // cache = liste complète reçue du back

/* ------------------  CHARGEMENT INITIAL  ------------------ */
async function chargerPays() {
  try {
    const rep  = await fetch(URL);
    const json = await rep.json();          // { polluant, unite, annee, pays:[…] }
    paysBrut   = json.pays;                 // on garde SEULEMENT le tableau

    construireTable(paysBrut);              // premier affichage
  } catch (e) {
    showErr("Erreur de chargement : " + e);
  }
}

/* ------------------  CONSTRUCTION TABLEAU  ------------------ */
function construireTable(tableau) {
  const tbody = document.getElementById("corps");
  tbody.innerHTML = "";                     // reset

  if (!Array.isArray(tableau) || tableau.length === 0) {
    tbody.innerHTML =
      `<tr><td colspan="3"><em>Aucun pays ne correspond au filtre.</em></td></tr>`;
    return;
  }

  tableau.forEach(p => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><img src="https://flagcdn.com/24x18/${p.code}.png" alt="">
          ${p.nom}</td>
      <td>${p.valeur}</td>
      <td>${p.pourcentage}</td>`;
    tbody.appendChild(tr);
  });
}

/* ------------------  FILTRAGE  ------------------ */
function appliquerFiltre() {
  const minChamp = document.getElementById("min").value.trim();
  const maxChamp = document.getElementById("max").value.trim();

  // tolère la virgule comme séparateur décimal
  const parse = v => Number(v.replace(",", "."));

  let min = minChamp === "" ? 0 : parse(minChamp);
  let max = maxChamp === "" ? Number.MAX_VALUE : parse(maxChamp);

  // --- contrôles ---
  if (isNaN(min) || isNaN(max)) return showErr("Saisissez des nombres valides.");
  if (min < 0 || max < 0)       return showErr("Les valeurs doivent être positives.");
  if (min > max)                return showErr("MIN doit être inférieur ou égal à MAX.");

  hideErr();

  const filtré = paysBrut.filter(p => {
    const v = Number(p.valeur);             // valeur du JSON → number
    return v >= min && v <= max;
  });

  construireTable(filtré);
}

/* ------------------  MESSAGES ERREUR  ------------------ */
function showErr(msg) {
  const box = document.getElementById("msgErreur");
  box.textContent = msg;
  box.style.display = "block";
}
function hideErr() {
  const box = document.getElementById("msgErreur");
  box.style.display = "none";
}

/* ------------------  INITIALISATION DOM ------------------ */
document.addEventListener("DOMContentLoaded", () => {
  // chargement API au démarrage
  chargerPays();

  // clic sur le bouton Valider → filtrage
  document.getElementById("valider")
          .addEventListener("click", appliquerFiltre);
});

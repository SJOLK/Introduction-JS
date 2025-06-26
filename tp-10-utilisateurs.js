/* ---------- HELPERS open/close (si modale-view absent) ---------- */
if (typeof window.closeModale !== "function") {
  window.closeModale = () => console.warn("closeModale() manquante !");
}
if (typeof window.openModale !== "function") {
  window.openModale  = () => console.warn("openModale() manquante !");
}

/* ---------- CONFIG ---------- */
const ID_CREATEUR = "MaxenceX3nc3";   // <- ton identifiant
const API_BASE    = "https://digicode.cleverapps.io/utilisateurs";

let users = [];
let idToDelete = null;

/* ---------- INIT ---------- */
window.addEventListener("load", refreshTable);

/* ---------- AFFICHAGE ---------- */
async function refreshTable() {
  try {
    const r = await fetch(`${API_BASE}/${ID_CREATEUR}`);
    users   = await r.json();
    render(users);
  } catch (e) {
    flash("Erreur chargement : " + e, true);
  }
}
function render(list) {
  const tb = document.getElementById("tbodyUsers");
  tb.innerHTML = "";
  list.forEach(u => {
    tb.insertAdjacentHTML(
      "beforeend",
      `<tr>
        <td>${u.id ?? ""}</td>
        <td>${u.nom}</td>
        <td>${u.prenom}</td>
        <td>${u.dateNaissance ?? ""}</td>
        <td>${u.lieuNaissance ?? ""}</td>
        <td>${formatAdresse(u)}</td>
        <td>
          <i class="fa-solid fa-trash-can" title="Supprimer"
             onclick="askDelete(${u.id})"></i>
        </td>
      </tr>`
    );
  });
}
function formatAdresse(u) {
  return [u.numeroRue, u.libelleRue, u.codePostal, u.ville]
    .filter(Boolean).join(" ");
}

/* ---------- CRÉATION ---------- */
async function submitCreate() {
  const f  = document.getElementById("formCreate");
  const obj = Object.fromEntries(new FormData(f).entries());
  obj.idCreateur = ID_CREATEUR;

  try {
    const r = await fetch(API_BASE, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body:   JSON.stringify(obj)
    });
    if (!r.ok) throw new Error(await r.text());

    flash("Utilisateur créé !", false);
    closeModale("modaleCreate");
    f.reset();
    refreshTable();
  } catch (e) {
    flash("Erreur création : " + e.message, true);
  }
}

/* ---------- SUPPRESSION ---------- */
function askDelete(id) {
  idToDelete = id;
  document.getElementById("deleteBody").textContent =
    `Voulez-vous supprimer l'utilisateur #${id} ?`;
  document.getElementById("btnConfDel").onclick = confirmDelete;
  openModale("modaleDelete");
}
async function confirmDelete() {
  try {
    await fetch(`${API_BASE}/${ID_CREATEUR}/${idToDelete}`, { method: "DELETE" });
    flash("Utilisateur supprimé.", false);
    closeModale("modaleDelete");
    refreshTable();
  } catch (e) {
    flash("Erreur suppression : " + e, true);
  }
}

/* ---------- MESSAGE FLASH ---------- */
function flash(txt, err) {
  const box = document.getElementById("flash");
  box.textContent = txt;
  box.className   = "msg " + (err ? "err" : "ok");
  box.style.display = "block";
  setTimeout(() => box.style.display = "none", 4000);
}

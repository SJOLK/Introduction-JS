/* =========================================================
   tp11-utilisateurs.js
   Back-end : JSON-Server  ➔  http://localhost:3000/utilisateurs
   ========================================================= */

/* -------------------- Configuration -------------------- */
const API_BASE = "http://localhost:3000/utilisateurs";   // JSON-Server endpoint
const ID_CREATEUR = "MaxenceX3nc3";                      // ton identifiant (facultatif)

/* -------------------- Variables globales -------------------- */
let users = [];          // cache local
let idToDelete = null;   // mémorise l’id sélectionné pour la suppression

/* -------------------- Initialisation -------------------- */
document.addEventListener("DOMContentLoaded", () => {
  loadUsers();                                           // affichage initial
  document.getElementById("btnConfDel")?.addEventListener("click", confirmDelete);
});

/* -------------------- Utilitaires UI -------------------- */
function flash(msg, isErr = false) {
  const box = document.getElementById("flash");
  if (!box) return;
  box.textContent   = msg;
  box.className     = "msg " + (isErr ? "err" : "ok");
  box.style.display = "block";
  setTimeout(() => (box.style.display = "none"), 4000);
}

function formatAdresse(u) {
  return [u.numeroRue, u.libelleRue, u.codePostal, u.ville].filter(Boolean).join(" ");
}

/* -------------------- Lecture -------------------- */
async function loadUsers() {
  try {
    const res = await fetch(API_BASE);
    users     = await res.json();
    renderTable(users);
  } catch (e) {
    flash("Erreur chargement : " + e, true);
  }
}

function renderTable(list) {
  const tbody = document.getElementById("tbodyUsers");
  if (!tbody) return;
  tbody.innerHTML = "";

  list.forEach(u => {
    tbody.insertAdjacentHTML(
      "beforeend",
      `<tr>
        <td>${u.id ?? ""}</td>
        <td>${u.nom}</td>
        <td>${u.prenom}</td>
        <td>${u.dateNaissance ?? ""}</td>
        <td>${u.lieuNaissance ?? ""}</td>
        <td>${formatAdresse(u)}</td>
        <td>
          <i class="fa-solid fa-trash-can" title="Supprimer" style="cursor:pointer;color:#dc3545"
             onclick="askDelete(${u.id})"></i>
        </td>
      </tr>`
    );
  });
}

/* -------------------- Création -------------------- */
async function submitCreate() {
  const form = document.getElementById("formCreate");
  if (!form) return;

  const obj = Object.fromEntries(new FormData(form).entries());
  obj.idCreateur = ID_CREATEUR;                        // facultatif, pour suivi

  try {
    const res = await fetch(API_BASE, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body   : JSON.stringify(obj)
    });
    if (!res.ok) throw new Error(await res.text());

    flash("Utilisateur créé !");
    form.reset();
    closeModale("modaleCreate");
    loadUsers();                                       // rafraîchit le tableau
  } catch (e) {
    flash("Erreur création : " + e.message, true);
  }
}

/* -------------------- Suppression -------------------- */
function askDelete(id) {
  idToDelete = id;
  const body = document.getElementById("deleteBody");
  if (body) body.textContent = `Supprimer l'utilisateur #${id} ?`;
  openModale("modaleDelete");
}

async function confirmDelete() {
  if (idToDelete == null) return;
  try {
    const res = await fetch(`${API_BASE}/${idToDelete}`, { method: "DELETE" });
    if (!res.ok) throw new Error(await res.text());

    flash("Utilisateur supprimé.");
    closeModale("modaleDelete");
    loadUsers();                                       // rafraîchit le tableau
  } catch (e) {
    flash("Erreur suppression : " + e, true);
  } finally {
    idToDelete = null;
  }
}

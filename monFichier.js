function initialiserDonnees() {
  let data = {
    polluant: "CO2",
    unite: "milliards de tonnes",
    annee: 2017,
    pays: [
      { nom: "Chine", valeur: 9.26, pourcentage: 28.2, code: "CN" },
      { nom: "Etats-Unis", valeur: 4.76, pourcentage: 14.5, code: "US" },
      { nom: "Inde", valeur: 2.16, pourcentage: 6.6, code: "IN" },
      { nom: "Russie", valeur: 1.54, pourcentage: 4.7, code: "RU" },
      { nom: "Japon", valeur: 1.13, pourcentage: 3.4, code: "JP" },
      { nom: "Allemagne", valeur: 0.72, pourcentage: 2.2, code: "DE" },
      { nom: "Corée du Sud", valeur: 0.6, pourcentage: 1.8, code: "KR" },
      { nom: "Iran", valeur: 0.57, pourcentage: 1.7, code: "IR" },
      { nom: "Canada", valeur: 0.55, pourcentage: 1.7, code: "CA" }
    ]
  };

  // Insertion du titre h1
  document.getElementById("titre").textContent = `Polluant : ${data.polluant} (${data.unite})`;

  // Insertion de l'année dans h2
  document.getElementById("annee").textContent = `Année : ${data.annee}`;

  // Affichage des pays dans le span
  let contenu = "<ul>";

  for (let pays of data.pays) {
    contenu += `
      <li>
        <img src="https://flagsapi.com/${pays.code}/flat/16.png" alt="${pays.nom}"> 
        <strong>${pays.nom}</strong> : ${pays.valeur} ${data.unite} (${pays.pourcentage}%)
      </li>
    `;
  }

  contenu += "</ul>";
  document.getElementById("listePays").innerHTML = contenu;
}

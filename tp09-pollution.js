function chargerPollution() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://digicode.cleverapps.io/json/pays/pollution", true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      afficherDonnees(data);
    }
  };

  xhr.send();
}

function afficherDonnees(data) {
  document.getElementById("titre").textContent = `Pays les plus polluants pour le ${data.polluant} (${data.unite})`;
  document.getElementById("annee").textContent = `Année : ${data.annee}`;

  const tbody = document.getElementById("corps");
  tbody.innerHTML = "";

  data.pays.forEach(pays => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td><img src="https://flagcdn.com/24x18/${pays.code}.png" alt="${pays.nom}"> ${pays.nom}</td>
      <td>${pays.valeur}</td>
      <td>${pays.pourcentage}</td>
    `;

    tbody.appendChild(tr);
  });
}

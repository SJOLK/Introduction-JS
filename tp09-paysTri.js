let paysData = [];
let triAscendant = true;

function chargerPays() {
  const req = new XMLHttpRequest();
  req.open("GET", "https://restcountries.com/v2/all", true);

  req.onreadystatechange = function () {
    if (req.readyState === 4 && req.status === 200) {
      paysData = JSON.parse(req.responseText);
      afficherPays(paysData);
    }
  };

  req.send();
}

function afficherPays(data) {
  const tbody = document.getElementById("corps");
  tbody.innerHTML = "";

  data.forEach(pays => {
    const tr = document.createElement("tr");

    const tdNom = document.createElement("td");
    tdNom.textContent = pays.name;
    tr.appendChild(tdNom);

    const tdCapitale = document.createElement("td");
    tdCapitale.textContent = pays.capital || "N/A";
    tr.appendChild(tdCapitale);

    const tdPopulation = document.createElement("td");
    tdPopulation.textContent = pays.population?.toLocaleString() || "N/A";
    tr.appendChild(tdPopulation);

    tbody.appendChild(tr);
  });
}

function trierParPopulation() {
  triAscendant = !triAscendant;

  paysData.sort((a, b) => {
    if (triAscendant) return a.population - b.population;
    else return b.population - a.population;
  });

  // Mise à jour des icônes
  const icone = document.getElementById("iconePopulation");
  icone.className = "fa-solid"; // reset
  icone.classList.add(triAscendant ? "fa-sort-up" : "fa-sort-down");

  afficherPays(paysData);
}

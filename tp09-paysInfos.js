function chargerPays() {
  const req = new XMLHttpRequest();
  req.open("GET", "https://restcountries.com/v2/all", true);

  req.onreadystatechange = function () {
    if (req.readyState === 4 && req.status === 200) {
      const data = JSON.parse(req.responseText);

      const tbody = document.getElementById("corps");
      tbody.innerHTML = "";

      data.forEach(pays => {
        const ligne = document.createElement("tr");

        const tdNom = document.createElement("td");
        tdNom.textContent = pays.name;
        ligne.appendChild(tdNom);

        const tdCapitale = document.createElement("td");
        tdCapitale.textContent = pays.capital || "N/A";
        ligne.appendChild(tdCapitale);

        const tdPopulation = document.createElement("td");
        tdPopulation.textContent = pays.population?.toLocaleString() || "N/A";
        ligne.appendChild(tdPopulation);

        const tdRegion = document.createElement("td");
        tdRegion.textContent = pays.region || "N/A";
        ligne.appendChild(tdRegion);

        tbody.appendChild(ligne);
      });
    }
  };

  req.send();
}

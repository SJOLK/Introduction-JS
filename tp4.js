let societe = {
  nom: "Google",
  siegeSocial: "Googleplex, Mountain View, California, United States",
  fondateurs: [
    {
      nom: "Larry Page",
      dateNaissance: "26/03/1973",
      lieuNaissance: "East Lansing, Michigan"
    },
    {
      nom: "Sergey Brin",
      dateNaissance: "21/08/1973",
      lieuNaissance: "Moscou, Union Soviétique"
    }
  ],
  chiffreAffaires: {
    2008: 16.49,
    2012: 37.97,
    2016: 89.46,
    2018: 136.2
  }
};

// Affichage des fondateurs
console.log("Fondateurs de la société " + societe.nom + " :");
for (let fondateur of societe.fondateurs) {
  console.log("- " + fondateur.nom + ", né le " + fondateur.dateNaissance + " à " + fondateur.lieuNaissance);
}

// Affichage des chiffres d’affaires
console.log("\nChiffres d'affaires (en milliards de $) :");
for (let annee in societe.chiffreAffaires) {
  console.log("- " + annee + " : " + societe.chiffreAffaires[annee] + " $");
}

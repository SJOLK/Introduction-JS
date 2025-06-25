function mettrePremiereLettreMaj(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

function majusculesChaqueMot(phrase) {
  if (typeof phrase !== "string") {
    return "Erreur : le paramètre n’est pas une chaîne.";
  }

  return phrase
    .split(" ")
    .map(mot => mettrePremiereLettreMaj(mot))
    .join(" ");
}

// Tests
console.log(majusculesChaqueMot("bonjour tout le monde")); // Bonjour Tout Le Monde
console.log(majusculesChaqueMot(123));                     // Erreur

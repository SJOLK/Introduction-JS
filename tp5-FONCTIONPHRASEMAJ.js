function mettrePremiereLettreMaj(str) {
  if (typeof str !== "string" || str.length === 0) return str;
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

function majusculesChaqueMot(phrase) {
  return phrase
    .split(" ")
    .map(mettrePremiereLettreMaj)
    .join(" ");
}

// Test
console.log(majusculesChaqueMot("bonjour tout le monde")); // Bonjour Tout Le Monde

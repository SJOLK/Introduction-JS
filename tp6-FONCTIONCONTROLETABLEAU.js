function verifierTableau(tab) {
  if (!Array.isArray(tab)) return "Erreur : paramètre non tableau.";

  for (let val of tab) {
    if (typeof val !== "number") return "Erreur : le tableau contient autre chose que des nombres.";
  }

  return true;
}

// Tests
console.log(verifierTableau([1, 2, 3]));         // true
console.log(verifierTableau([1, "deux", 3]));    // Erreur
console.log(verifierTableau("ceci n'est pas un tableau")); // Erreur

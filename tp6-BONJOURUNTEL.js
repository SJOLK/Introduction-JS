function direBonjour(nom) {
  if (typeof nom !== "string") {
    return "Erreur : le paramètre n'est pas une chaîne.";
  }
  return "Bonjour " + nom;
}

// Test
console.log(direBonjour("Marcel"));   // Bonjour Marcel
console.log(direBonjour(42));         // Erreur

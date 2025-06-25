function mettrePremiereLettreMaj(str) {
  if (typeof str !== "string") {
    return "Erreur : le paramètre n’est pas une chaîne.";
  }
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

// Tests
console.log(mettrePremiereLettreMaj("bonjour")); // Bonjour
console.log(mettrePremiereLettreMaj(42));        // Erreur

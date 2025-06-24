function moyenne(tab) {
  if (!Array.isArray(tab)) {
    return "Erreur : le paramètre n'est pas un tableau";
  }

  if (tab.length === 0) {
    return 0;
  }

  for (let val of tab) {
    if (typeof val !== "number") {
      return "Erreur : tous les éléments doivent être des nombres";
    }
  }

  let somme = tab.reduce((a, b) => a + b, 0);
  return somme / tab.length;
}

// Appels
console.log(moyenne([10, 20, 30]));      // 20
console.log(moyenne([]));                // 0
console.log(moyenne("ceci n'est pas un tableau"));  // Erreur
console.log(moyenne([1, "test", 3]));    // Erreur

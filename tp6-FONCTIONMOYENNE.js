function moyenne(tab) {
  if (!Array.isArray(tab)) throw new Error("Le paramètre n'est pas un tableau.");
  if (tab.length === 0) return 0;

  for (let val of tab) {
    if (typeof val !== "number") {
      throw new Error("Le tableau contient un élément non numérique.");
    }
  }

  return tab.reduce((a, b) => a + b, 0) / tab.length;
}

// Tests
try {
  console.log("Test 1 (valide):", moyenne([10, 20, 30])); // 20
} catch (e) {
  console.error("Erreur Test 1:", e.message);
}

try {
  console.log("Test 2 (avec string):", moyenne([10, "test", 30]));
} catch (e) {
  console.error("Erreur Test 2:", e.message);
}

try {
  console.log("Test 3 (non tableau):", moyenne("pas un tableau"));
} catch (e) {
  console.error("Erreur Test 3:", e.message);
}

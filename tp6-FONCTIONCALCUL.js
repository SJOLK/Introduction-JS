function calcul(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Erreur : les deux paramètres doivent être des nombres.";
  }
  return a * b + a + b;
}

// Tests
console.log(calcul(2, 3));       // 11
console.log(calcul("a", 3));     // Erreur
console.log(calcul(2, "b"));     // Erreur

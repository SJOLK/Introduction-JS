function creerMultiplicateur(n) {
  return function(nb) {
    return nb * n;
  };
}

// Création des fonctions
let fois2 = creerMultiplicateur(2);
let fois5 = creerMultiplicateur(5);

// Appels
console.log(fois2(10)); // 20
console.log(fois5(10)); // 50

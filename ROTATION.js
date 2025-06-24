let array = [0, 1, 2, 3];

// Rotation à droite : on enlève le dernier élément et on le met au début
array.unshift(array.pop());

console.log(array); // Résultat : [3, 0, 1, 2]

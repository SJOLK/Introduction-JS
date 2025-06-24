let t1 = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let t2 = [-1, 12, 17, 14, 5, -9, 0, 18, -6, 0, 4, -13, 5, 7, -2, 8, -1];

let sum = [];

for (let i = 0; i < t1.length; i++) {
  sum.push(t1[i] + t2[i]);
}

console.log("Somme des deux tableaux :", sum);

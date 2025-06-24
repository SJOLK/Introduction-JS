let t1 = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let t2 = [-1, 12, 17, 14, 5, -9, 0, 18];

let lengthMax = Math.max(t1.length, t2.length);
let sum = [];

for (let i = 0; i < lengthMax; i++) {
  let val1 = t1[i] ?? 0;
  let val2 = t2[i] ?? 0;
  sum.push(val1 + val2);
}

console.log("Somme des deux tableaux (différente taille) :", sum);

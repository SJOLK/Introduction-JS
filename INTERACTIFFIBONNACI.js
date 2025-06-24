let n = 10;

let a = 0, b = 1, temp;

if (n === 0) {
  console.log(0);
} else if (n === 1) {
  console.log(1);
} else {
  for (let i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  console.log("Fibonacci de rang " + n + " : " + b);
}

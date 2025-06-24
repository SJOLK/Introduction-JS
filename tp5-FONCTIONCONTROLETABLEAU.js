function verifierTableau(tab) {
  return tab.every(element => typeof element === "number");
}

// Tests
console.log(verifierTableau([1, 2, 3]));        
console.log(verifierTableau([1, "2", 3]));       
console.log(verifierTableau([]));               

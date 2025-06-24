function calculerAge(dateNaissance) {
  let naissance = new Date(dateNaissance);
  let aujourdHui = new Date();

  let ageAnnee = aujourdHui.getFullYear() - naissance.getFullYear();
  let ageMois = aujourdHui.getMonth() - naissance.getMonth();

  if (ageMois < 0) {
    ageAnnee--;
    ageMois += 12;
  }

  console.log(`Vous avez ${ageAnnee} an(s) et ${ageMois} mois.`);
}

// Exemple d'appel
calculerAge("2000-08-09"); 

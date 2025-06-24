function plusGrandeDate(date1, date2) {
  let d1 = new Date(date1);
  let d2 = new Date(date2);

  if (d1 > d2) {
    console.log("La date la plus récente est :", d1.toLocaleDateString());
  } else if (d2 > d1) {
    console.log("La date la plus récente est :", d2.toLocaleDateString());
  } else {
    console.log("Les deux dates sont identiques :", d1.toLocaleDateString());
  }
}

// Exemple d'appel
plusGrandeDate("2024-11-20", "2025-06-23");

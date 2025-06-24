function creerGestionnaire() {
  return {
    taches: [],

    ajouterTache(description) {
      this.taches.push({
        description: description,
        terminee: false
      });
    },

    terminerTache(index) {
      if (this.taches[index]) {
        this.taches[index].terminee = true;
      } else {
        console.log("Erreur : index invalide");
      }
    },

    afficherTaches() {
      if (this.taches.length === 0) {
        console.log("Aucune tâche enregistrée.");
        return;
      }

      this.taches.forEach((tache, index) => {
        let etat = tache.terminee ? "✓ Terminée" : "✗ En cours";
        console.log(`${index} - ${tache.description} [${etat}]`);
      });
    }
  };
}



const gestionnaire = creerGestionnaire();

gestionnaire.ajouterTache("Apprendre JavaScript");
gestionnaire.ajouterTache("Faire les courses");
gestionnaire.ajouterTache("Aller à la salle");

gestionnaire.terminerTache(1); 

gestionnaire.afficherTaches();

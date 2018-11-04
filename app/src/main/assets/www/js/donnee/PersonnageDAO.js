var PersonnageDAO = function () {
    var listePersonnage;
    var initialiser = function () {
        if (!listePersonnage) {
            listePersonnage = [
                new Personnage(0, "Eliott", "Quart d'elfe", "Archimage", 120),
                new Personnage(1, "Vincent", "Humain", "Prêtre", 120),
                new Personnage(2, "Youssef", "Humain", "Voleur", 1)
            ]
        }
    }
    this.chercherAvecId = function (idPersonnage) {
        for (position in listePersonnage) {
            if (listePersonnage[position].id == idPersonnage)  return listePersonnage[position];
        }
        return listePersonnage[0];
    }
    this.lister = function () {
        return listePersonnage;
    }
    initialiser();
}
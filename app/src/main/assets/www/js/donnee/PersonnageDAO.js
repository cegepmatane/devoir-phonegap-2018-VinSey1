var PersonnageDAO = function () {
    var listePersonnage;
    var initialiser = function () {
        if (!listePersonnage) {
            listePersonnage = []
        }
    }
    this.chercherAvecId = function (idPersonnage) {
        for (position in listePersonnage) {
            if (listePersonnage[position].id == idPersonnage)  return listePersonnage[position];
        }
        return listePersonnage[0];
    }
    this.lister = function () {
        if (localStorage['personnage']) {
            listePersonnage = JSON.parse(localStorage['personnage']);
        }
        for (position in listePersonnage) {
            var personnage = new Personnage(
                listePersonnage[position].id,
                listePersonnage[position].nom,
                listePersonnage[position].race,
                listePersonnage[position].classe,
                listePersonnage[position].niveau
            );
            listePersonnage[position] = personnage;
        }
        return listePersonnage;
    }
    this.ajouter = function (personnage) {
        if (listePersonnage.length > 0) {
            personnage.id = listePersonnage[listePersonnage.length - 1].id + 1;
        } else {
            personnage.id = 0;
        }
        listePersonnage[personnage.id] = personnage;
        localStorage['personnage'] = JSON.stringify(listePersonnage);
    }
    initialiser();
}
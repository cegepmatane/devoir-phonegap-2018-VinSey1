var PersonnageDAO = function () {
    this.listePersonnage = [
        new Personnage(0, "Eliott", "Quart d'elfe", "Archimage", 120),
        new Personnage(1, "Vincent", "Humain", "Prêtre", 120),
        new Personnage(2, "Youssef", "Humain", "Voleur", 1),
    ]
    this.lister = function () {
        return this.listePersonnage;
    }
}
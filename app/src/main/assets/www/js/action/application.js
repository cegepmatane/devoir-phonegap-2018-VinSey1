(function () {
    var initialiser = function (){
        this.personnageDAO = new PersonnageDAO();
        this.listePersonnageDonnee = this.personnageDAO.lister();
        window.addEventListener("hashchange", naviguer);
        naviguer();
    }
    var naviguer = function () {
        var hash = window.location.hash;
        if (!hash) {
            var listePersonnageVue = new ListePersonnageVue(listePersonnageDonnee);
            listePersonnageVue.afficher();
        } else if (hash.match(/^#personnage\/([0-9]+)/)) {
            var navigation = hash.match(/^#personnage\/([0-9]+)/);
            var idPersonnage = navigation[1];
            var personnageVue = new PersonnageVue(this.personnageDAO.chercherAvecId(idPersonnage));
            personnageVue.afficher();
        } else if (hash.match(/^#ajouter-personnage/)) {
            var ajouterPersonnageVue = new AjouterPersonnageVue(actionEnregistrerPersonnage);
            ajouterPersonnageVue.afficher();
        }
        else if (hash.match(/^#modifier-personnage\/([0-9]+)/)) {
            var navigation = hash.match(/^#modifier-personnage\/([0-9]+)/);
            var idPersonnage = navigation[1];
            var modifierPersonnageVue = new ModifierPersonnageVue(actionModifierPersonnage, this.personnageDAO.chercherAvecId(idPersonnage));
            modifierPersonnageVue.afficher();
        } else {
            naviguerAccueil();
        }
    }
    var actionModifierPersonnage = function (personnage) {
        this.personnageDAO.modifier(personnage);
        naviguerAccueil();
    }
    var actionEnregistrerPersonnage = function (personnage) {
        this.personnageDAO.ajouter(personnage);
        naviguerAccueil();
    }
    var naviguerAccueil = function () {
        window.location.hash = "";
    }
    initialiser();
})();
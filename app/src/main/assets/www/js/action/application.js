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
        }
    }
    initialiser();
})();
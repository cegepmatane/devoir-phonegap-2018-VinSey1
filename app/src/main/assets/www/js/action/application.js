(function () {
    var initialiser = function (){
        this.personnageDAO = new PersonnageDAO();
        this.listePersonnageDonnee = this.personnageDAO.lister();
        var listePersonnageVue = new ListePersonnageVue(listePersonnageDonnee);
        listePersonnageVue.afficher();
    }
    initialiser();
})();
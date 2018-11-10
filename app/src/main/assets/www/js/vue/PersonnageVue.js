var PersonnageVue = (function() {
    var pagePersonnage = document.getElementById("page-personnage").innerHTML;
    classe = function (personnage) {
        var personnageNom;
        var personnageRaceEtClasse;
        var personnageNiveau;
        this.afficher = function () {
            document.getElementsByTagName("body")[0].innerHTML = pagePersonnage;
            personnageNom = document.getElementById("personnage-nom");
            personnageNom.innerHTML = "Fiche de " + personnage.nom;
            personnageRaceEtClasse = document.getElementById("personnage-race-classe");
            personnageRaceEtClasse.innerHTML = personnage.race + " " + personnage.classe;
            personnageNiveau = document.getElementById("personnage-niveau");
            personnageNiveau.innerHTML = "Niveau : " + personnage.niveau;
        }
    };
    return classe;
})();
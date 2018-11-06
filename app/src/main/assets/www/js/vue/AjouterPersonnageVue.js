var AjouterPersonnageVue = (function () {
    var pageAjouterPersonnage = document.getElementById("page-ajouter-personnage").innerHTML;
    classe = function (actionEnregistrerPersonnage) {
        this.afficher = function () {
        	document.getElementsByTagName("body")[0].innerHTML = pageAjouterPersonnage;
            var formulaireAjouter = document.getElementById("formulaire-ajouter");
            formulaireAjouter.addEventListener("submit", enregistrerPersonnage);
        }
        var enregistrerPersonnage = function (evenement) {
            evenement.preventDefault();
            var nom = document.getElementById("nom").value;
            var race = document.getElementById("race").value;
            var classe = document.getElementById("classe").value;
            var niveau = document.getElementById("niveau").value;
            var personnage = new Personnage(null, nom, race, classe, niveau);
            actionEnregistrerPersonnage(personnage);
        }
    };
    return classe;
})();
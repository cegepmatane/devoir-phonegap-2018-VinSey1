var ModifierPersonnageVue = (function () {
    var pageModifierPersonnage = document.getElementById("page-modifier-personnage").innerHTML;
    var idPersonnage;
    classe = function (actionModifierPersonnage, personnage) {
        this.afficher = function () {
            document.getElementsByTagName("body")[0].innerHTML = pageModifierPersonnage;
            var formulaireModifier = document.getElementById("formulaire-modifier");
            idPersonnage = personnage.id;
            personnageNom = document.getElementById("nom");
            personnageNom.value = personnage.nom;
            personnageRace = document.getElementById("race");
            personnageRace.value = personnage.race;
            personnageClasse = document.getElementById("classe");
            personnageClasse.value = personnage.classe;
            personnageNiveau = document.getElementById("niveau");
            personnageNiveau.value = personnage.niveau;
            formulaireModifier.addEventListener("submit", modifierPersonnage);
        }
        var modifierPersonnage = function (evenement) {
            evenement.preventDefault();
            var nom = document.getElementById("nom").value;
            var race = document.getElementById("race").value;
            var classe = document.getElementById("classe").value;
            var niveau = document.getElementById("niveau").value;
            var personnage = new Personnage(idPersonnage, nom, race, classe, niveau);
            actionModifierPersonnage(personnage);
        }
    };
    return classe;
})();
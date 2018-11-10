var ListePersonnageVue = (function () {
    var pageListePersonnage = document.getElementById("page-liste-personnage").innerHTML;
    classe = function (listePersonnageDonnee) {
        this.afficher = function () {
            document.getElementsByTagName("body")[0].innerHTML = pageListePersonnage;
            var listePersonnage = document.getElementById("liste-personnage");
            var li = "";
            for (var numeroPersonnage in listePersonnageDonnee) {
                li += "<li class='collection-item'><a href='#personnage/" + numeroPersonnage + "'><span class='indigo-text darken-4'>" + listePersonnageDonnee[numeroPersonnage].nom + "</span></a><a class='secondary-content' href='#modifier-personnage/" + numeroPersonnage + "'><i class='material-icons'>edit</i></a></li>";
            }
            listePersonnage.innerHTML = li;
        }
    };
    return classe;
})();
var ListePersonnageVue = (function () {
    var pageListePersonnage = document.getElementById("page-liste-personnage").innerHTML;
    classe = function (listePersonnageDonnee) {
        this.afficher = function () {
            document.getElementsByTagName("body")[0].innerHTML = pageListePersonnage;
            var listePersonnage = document.getElementById("liste-personnage");
            var li = "";
            for (var numeroPersonnage in listePersonnageDonnee) {
                li += "<li><a href='#personnage/" + numeroPersonnage + "'>" + listePersonnageDonnee[numeroPersonnage].nom + "</a> - <a href='#modifier-personnage/" + numeroPersonnage + "'>Modifier personnage </a></form></li>";
            }
            listePersonnage.innerHTML = li;
        }
    };
    return classe;
})();
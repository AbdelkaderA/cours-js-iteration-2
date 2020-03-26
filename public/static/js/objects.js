
/**
 * Fonction à appeler au chargement de la page
 * Cette fonction devra exécuter les actions suivantes :
 *    - charger la liste des objets depuis l'API
 *    - charger les données des objets dans la table
 */
function load_components() {
    console.log("Chargement des données de la page");// Ajouter ici le code permettant de charger dynamiquement les éléments de la page
    $.get("/objects", function (data, satus) {
        console.log(data);
    });
}
load_components();


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

function ajoutLigne(){
    let ligne =
    '<tr>\
    <th class="text-center font-italic" style="width: 100px"> OBJ_002 </th>\
    <th class="text-center"></th>\
    <th class="text-center font-italic">Description du produit 2</th>\
    <th class="text-center" style="width: 100px"><input type ="checkbox"></th>\
    <th><button type="button" class="text-center btn btn-outline-info">Détails</button></th>\
    </tr>';
    

    document.getElementById('table_body').innerHTML += ligne
    
    /**$('table_body').apend(ligne)*/
}


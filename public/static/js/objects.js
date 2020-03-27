
/**
 * Fonction à appeler au chargement de la page
 * Cette fonction devra exécuter les actions suivantes :
 *    - charger la liste des objets depuis l'API
 *    - charger les données des objets dans la table
 */
function load_components() {
    console.log("Chargement des données de la page");// Ajouter ici le code permettant de charger dynamiquement les éléments de la page
    $.get("/objects", function (data) {
        for (let p of data.objects) {
            add_line_to_table(p)
        }
    });
}
load_components();

function add_line_to_table(data) {
    //let check = "";
    //if (data.status) {
    //    return "checked";
    //}
    //else {
    //    return "";
    //}
    let ligne =
        '<tr>\
    <th class="text-center align-text-bottom" >'+ data.serial + '</th>\
    <th class="text-center"><img style="max-width:150px; heigth:auto;" src=" static/images/' + data.image + '"></th>\
    <th class="text-center align-text-bottom">'+ data.description + '</th>\
    <th class="text-center align-text-bottom" style="width: 100px"><input type ="checkbox" '+check(data)+'></th>\
    <th><button type="button" class="text-center btn btn-outline-info">Détails</button></th>\
    </tr>';
    document.getElementById('table_body').innerHTML += ligne

    /**$('table_body').apend(ligne)*/
}

function check(data){
    if (data.status) {
        return "checked";
    }
    else {
        return "";
    }
    //return check;
}

function rafraichir(){
    document.getElementById('table_body').innerHTML="";
    load_components();
}

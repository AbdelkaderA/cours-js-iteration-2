
/**
 * Fonction à appeler au chargement de la page
 * Cette fonction devra exécuter les actions suivantes :
 *    - charger la liste des objets depuis l'API
 *    - charger les données des objets dans la table
 */
function load_components() {
    //console.log("Chargement des données de la page");// Ajouter ici le code permettant de charger dynamiquement les éléments de la page
    $.get("/objects", function (data) {
        for (let p of data.objects) {
            add_line_to_table(p)
        }
    });
    //console.log("Load components est lancé. Traitement des données en cours");
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

    /**
     * A faire pour remplir la ligne :
     * 1. tester si l'image est présente
     * 2. si l'image n'existe pas, appeler la fonction load_default_image
     * 3. créer une fonction load_default_image
     * 4. appelez l'API pour récupérer le type de l'objet contenant default_image
     * 5. retrouvez l'élément contenant l'image
     * 6. mettez à jour l'image avec default_image
     */

    if(!data.image){
        load_default_image(data);
    }

    let ligne =
        '<tr>\
            <th class="text-center align-text-bottom" >'+ data.serial +'</th>\
            <th class="text-center"><img style="max-width:150px; heigth:auto;" src=" static/images/'+ data.image +'"></th>\
            <th class="text-center align-text-bottom">'+ data.description +'</th>\
            <th class="text-center align-text-bottom" style="width: 100px"><input type ="checkbox" '+ check(data) +'></th>\
            <th><button type="button" class="text-center btn btn-outline-info">Détails</button></th>\
        </tr>';
    document.getElementById('table_body').innerHTML += ligne
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

function load_default_image(data_objects) {
    $.get("/data", function (data) {
        //console.log(data);
        //console.log(data_objects);
        for (let p of document.getElementById('table_body').childNodes) {
            if (p.nodeName == 'TR') {
                if (p.childNodes[1].childNodes[0].textContent == data_objects.serial) {
                    p.childNodes[3].childNodes[0].setAttribute('src', '/static/images/' + data.types[data_objects.type].default_image );;
                    //console.log(data.default_image);
                }
            }
        }
    });
}
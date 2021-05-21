// Courant 
// Json / Mustache 


// Variables

let infoCourant;

//Éléments DOM
const dataContainer = document.querySelector("#js-courant");
const courantTpl = document.querySelector("#js-courant-tpl").innerHTML;

//----------------------------------------------------------

// Fonction servant à charger le JSON
function loadData(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        // readyState 4 = DONE  // status 200 = Success/OK
        if (this.readyState == 4 && this.status == 200) {
            let obj = JSON.parse(this.responseText);
            callback(obj);
        }
    }
    xhr.open("GET", url, true);
    xhr.send();
}

loadData("data/data.json", getJsonData);


//---------------------------------------------------------

function getJsonData(objJson) {
    infoCourant = objJson;
    showData();
}

function showData() {
    let htmlContent = Mustache.render(courantTpl, infoCourant);
    dataContainer.innerHTML = htmlContent;
}

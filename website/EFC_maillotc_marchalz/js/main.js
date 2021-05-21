/* console.log("Hello World"); */

const etoiles = document.querySelectorAll(".fa-star");
const containerStar = document.querySelectorAll(".chanteur")
/* console.log(etoiles); */
//--------------------------------------------------------------------------------------------------------------

etoiles.forEach(function (item) {
    /* console.log(item); */
    item.addEventListener("click", function () {
        /* console.log(item.parentNode.id); */ //pour le LocalStorage
        btnSelected(item.parentNode, item);
    });
});
//--------------------------------------------------------------------------------------------------------------

function btnSelected(obSelected, selected) {
    let child = obSelected.children;
    for (let i = 0; i <= 4; i++) {
        if (selected.getAttribute("data") >= i) {
            child[i].classList.add("gold");
        } else {
            child[i].classList.remove("gold");
        }
    }
    ArrayEtoile = JSON.parse(localStorage.getItem(KeyValueStar));
    putInLocalStorage(obSelected.id, selected.getAttribute("data"));

}

//--------------------------------------------------------------------------------------------------------------

let KeyValueStar = "stars"
let ArrayEtoile = [];
let elementExist = false;
const singerStars = document.querySelectorAll(".stars")
//Initialisation pour le LocalStorage
function init() {
    if (localStorage.getItem(KeyValueStar) == null) {
        localStorage.setItem(KeyValueStar, JSON.stringify(ArrayEtoile));
    }
    else {
        ArrayEtoile = JSON.parse(localStorage.getItem(KeyValueStar));
        ShowStars();
    }
}
init();

//--------------------------------------------------------------------------------------------------------------

function ShowStars() {
    ArrayEtoile.forEach(function (value) {
        singerStars.forEach(function (etoile) {
            verifStar(value, etoile);
        })
    });
}

//--------------------------------------------------------------------------------------------------------------

function verifStar(storage, singer) {
    if (storage.id == singer.id) {
        for (let i = 0; i <= storage.note; i++) {
            if (singer.children[i].getAttribute("data") >= i) {
                singer.children[i].classList.add("gold");
            }
        }
    }
}

//--------------------------------------------------------------------------------------------------------------

function putInLocalStorage(id, note) {
    elementExist = false;
    let evaluate = parseInt(note);
    let Chanteur = {
        id: id,
        note: evaluate
    }
    ArrayEtoile.forEach(function (item) {
        console.log(item)
        if (item.id == Chanteur.id) {
            item.note = Chanteur.note;
            elementExist = true;
            localStorage.setItem(KeyValueStar, JSON.stringify(ArrayEtoile));
        }
    });
    if (elementExist == false) {
        ArrayEtoile.push(Chanteur);
        localStorage.setItem(KeyValueStar, JSON.stringify(ArrayEtoile));
    }

}


//--------------------------------------------------------------------------------------------------------------

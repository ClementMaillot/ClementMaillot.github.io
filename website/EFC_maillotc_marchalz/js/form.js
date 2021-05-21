//--------------------------------------------------------------------------------------------------------------


//Formulaire
const errorMsg = document.querySelector("#js-erreur");

const userName = document.getElementById("nom");

const userFirstname = document.getElementById("prenom");

const mailText = document.querySelector("#courriel");

const validateText = document.querySelector(".validation");

userName.addEventListener("blur", validateName);
userFirstname.addEventListener("blur", validateFirstname);
mailText.addEventListener("blur", validateMail);

let isError = false;

function validateName() {

    let regexNom = /^[a-zA-Z]{2,10}$/;

    if (userName.value.match(regexNom)) {
        userName.style.border = "solid 1px #ccc";
        userName.style.color = "black";

    } else {
        userName.style.borderColor = "red";
        userName.style.color = "red";
        isError = true;
    }

}

function validateFirstname() {

    let regexPrenom = /^[a-zA-Z]{2,10}$/;

    if (userFirstname.value.match(regexPrenom)) {
        userFirstname.style.border = "solid 1px #ccc";
        userFirstname.style.color = "black";

    } else {
        userFirstname.style.borderColor = "red";
        userFirstname.style.color = "red";
        isError = true;
    }

}

// Valider l'adresse courriel

function validateMail() {
    let mailRegex = /\S+@\S+\.\S+/

    if (mailText.value.match(mailRegex)) {
        mailText.style.border = "solid 1px #ccc";
        mailText.style.color = "black";

    } else {
        mailText.style.borderColor = "red";
        mailText.style.color = "red";
        isError = true;
    }
}

// Formulaire
const formulaire = document.querySelector("#js-form");
formulaire.addEventListener("submit", function (e) {
    isError = false;
    validateName();
    validateFirstname();
    validateMail();

    if (isError) {
        e.preventDefault();
        errorMsg.style.display = "block";
    } else {
        errorMsg.style.display = "none";
        formulaire.style.display = "none";
        validateText.style.display = "block";
    }
    return;
})






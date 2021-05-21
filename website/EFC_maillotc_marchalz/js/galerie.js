const modal = document.querySelector("#js-modale");
const modalOpenBtn = document.querySelectorAll("#btn-more");
const modalCloseBtn = document.querySelector(".close-btn");
const modalePicture = document.querySelector("#js-picture");
const modaleTitle = document.querySelector("#js-titre");
const picture = document.querySelectorAll(".picture");

modalOpenBtn.forEach(function (item) {
    item.addEventListener("click", function (value) {
        modalePicture.src = value.target.src;
        modaleTitle.textContent = value.target.getAttribute("alt");
        console.log(value);

        modal.style.display = "flex";
    });
})


modalCloseBtn.addEventListener("click", function () {
    modal.style.display = "none";
});

modal.addEventListener("click", function (evt) {
    if (evt.target.id == "js-modale") {
        modal.style.display = "none";
    }
});

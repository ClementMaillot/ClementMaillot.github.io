const $test = document.getElementById("logosite");
function setMode(oEvent) {
  document.body.classList.replace(
    aModes[Number(!this.checked)],
    aModes[Number(this.checked)]
  );
  localStorage.setItem("mode", aModes[Number(this.checked)]);
  localStorage.setItem("logo", aLogos[Number(this.checked)]);
  this.parentNode.nextElementSibling.innerHTML = this.checked
    ? "Mode lumineux"
    : "Mode Sombre";
  setLogo($test);
}

function loadMode() {
  let sMode = localStorage.getItem("mode");
  let sLogo = localStorage.getItem("Logo");
  document.forms["mytheme"]["theme-mode"].checked = sMode == aModes[1];
  document.forms["mytheme"]["theme-mode"].checked = sLogo == aLogos[1];
  setMode.call(document.forms["mytheme"]["theme-mode"]);
}
let aModes = ["mode-dark", "mode-white"];
let aLogos = ["black-logo", "white-logo"];
document.addEventListener("DOMContentLoaded", function () {
  document.body.classList.add(aModes[0]);
  document.forms["mytheme"]["theme-mode"].addEventListener("click", setMode);
  loadMode();
});

function setLogo($test) {
  if ($test.alt == "white-logo") {
    $test.src = "img/logo.png";
    $test.alt = "black-logo";
  } else {
    $test.src = "img/logo-blanc.png";
    $test.alt = "white-logo";
  }
}

$(document).ready(function () {
  var scrollTop = 0;
  $(window).scroll(function () {
    scrollTop = $(window).scrollTop();
    $(".counter").html(scrollTop);

    if (scrollTop >= 100) {
      $("#global-nav").addClass("scrolled-nav");
    } else if (scrollTop < 100) {
      $("#global-nav").removeClass("scrolled-nav");
    }
  });
});

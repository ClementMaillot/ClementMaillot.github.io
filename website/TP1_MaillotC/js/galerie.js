let images = [
  {
    url: "img/viking/v1.jpg",
    caption: "Portrait de VIKING",
  },
  {
    url: "img/viking/v2.jpg",
    caption: "Guerre de Viking",
  },
  {
    url: "img/viking/v3.jpg",
    caption: "Combat de Viking",
  },
  {
    url: "img/viking/v4.jpg",
    caption: "Viking Seul",
  },
  {
    url: "img/viking/v5.jpg",
    caption: "Groupe de viking",
  },
  {
    url: "img/viking/v6.jpg",
    caption: "Bouclier Viking",
  },
  {
    url: "img/viking/v7.jpg",
    caption: "Hutte de Viking",
  },
  {
    url: "img/viking/v8.jpg",
    caption: "Chef Viking",
  },
  {
    url: "img/viking/v9.jpg",
    caption: "Collier de Viking",
  },
  {
    url: "img/viking/v10.jpg",
    caption: "Chaman Viking",
  },
  {
    url: "img/viking/v11.jpg",
    caption: "Casque Visking",
  },
  {
    url: "img/viking/v12.jpg",
    caption: "Autre bouclier Viking",
  },
  {
    url: "img/viking/v13.jpg",
    caption: "Deux combattants",
  },
  {
    url: "img/viking/v14.jpg",
    caption: "Drakkar",
  },
  {
    url: "img/viking/v15.jpg",
    caption: "Combat en action",
  },
  {
    url: "img/viking/v16.jpg",
    caption: "Spectacle",
  },
];
const mainView = document.getElementById("main-view");
const caption = document.getElementById("caption");
const info = document.getElementById("info");

const thumbnails = document.getElementById("thumbnails");

for (let i = 0; i < images.length; i++) {
  let image = images[i];
  let img = document.createElement("img");
  img.src = images[i].url;
  img.setAttribute("data-index", i);
  img.addEventListener("click", changeImage);
  thumbnails.appendChild(img);
}

function initGallery() {
  loadImage(0);
}

function slideImage() {
  let currentIndex = parseInt(mainView.getAttribute("data-index"));
  currentIndex = currentIndex + 1 == images.length ? 1 : currentIndex + 1;
  loadImage(currentIndex);
  setTimeout(slideImage, 3000);
}

function changeImage(event) {
  let target = event.currentTarget;
  let index = target.getAttribute("data-index");
  loadImage(index);
}

function loadImage(index) {
  let image = images[index];
  mainView.src = image.url;
  mainView.setAttribute("data-index", index);
  mainView.setAttribute("id", "image-" + index);
  mainView.style.opacity = 1;
  caption.textContent = image.caption;
  info.textContent = image.info;
}

function fullScreenImage() {
  toggleFullscreen(mainView);
}

function toggleFullscreen(el) {
  if (
    document.fullscreenElement ||
    document.mozFullScreenElement ||
    document.webkitFullscreenElement ||
    document.msFullscreenElement
  ) {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  } else {
    if (document.documentElement.requestFullscreen) {
      el.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      el.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      el.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      el.msRequestFullscreen();
    }
  }
}

initGallery();
setTimeout(slideImage, 3000);

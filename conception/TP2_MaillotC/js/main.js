/**
 * Fichier d'entrée pour un projet utilisant Phaser 3
 * La première chose à faire, est de charger les polices pour le projet
 * @author JMS
 * @version Phaser 3.22
 * On utilise "var" au lien de "let" afin de garder une compatibilité accrue avec les plus vieux navigateurs
 */

//Configuration pour le chargement des polices
var wfconfig = {
  /* custom: {
    families: [""],
    urls: [""]
  }, */
  google: {
    families: ["Trade Winds", "Lacquer", "Yeon Sung"]
  },
  active: function () {
    console.log("All fonts are loaded!");
    //ici on sait que toutes les polices sont chargées, alors on lance l'initialisation de Phaser
    initPhaser();
  }
};

//appel du chargement des polices
WebFont.load(wfconfig);

//Configuration pour Phaser
var config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  backgroundColor: 0xff0000,
  scale: {
    mode: Phaser.Scale.FIT, //toujours visible, garde les proportions
    autoCenter: Phaser.Scale.CENTER_BOTH //centré
  },
  scene: [Menu, Game] //scènes dans le projet
};

var game;

//charge phaser en utilisant la configuration définie
function initPhaser() {
  game = new Phaser.Game(config);
}

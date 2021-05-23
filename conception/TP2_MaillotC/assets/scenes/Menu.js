/**
 * Scène affichée lorsque avant de débuter la partie
 */
var Menu = new Phaser.Class({
  Extends: Phaser.Scene,
  initialize: function Menu() {
    Phaser.Scene.call(this, {
      key: "Menu" //Le nom de la classe doit être le même que la clé définie ici...
    });
  },
  preload: function () {
    this.load.image("bg", "assets/images/bg.jpg");
    this.load.image("bombe", "assets/images/bombe.png");
    for (var i = 1; i < 38; i++) {
      this.load.image("man" + i, "assets/spritesheet/man" + i + ".png")
    };
  },
  create: function () {
    //ajout d'une image sur la scène
    this.add.image(0, 0, "bg").setOrigin(0);

    this.titleTxt = this.add
      .text(config.width * 0.5, config.height * 0.5, "BomberJump", {
        fontFamily: "Trade Winds",
        fontSize: "200px",
        fill: "#000000",
        align: "center"
      })
      .setOrigin(0.5);

    this.bombe_left = this.add.image(
      -300,
      config.height * 0.65,
      "bombe"
    );
    /* this.man_right = this.add.image(
      config.width * 0.8,
      config.height * 0.612,
      "homme"
    ); */
    let frames = [];
    for (var i = 1; i < 38; i++) {
      frames.push({ key: "man" + i });
    };

    this.anims.create({
      key: 'jump',
      frames: frames,
      frameRate: 24,
      repeat: 0,
    });
    this.perso = this.add.sprite(config.width * 0.8,
      config.height * 0.612, 'man1');



    this.messageTxt = this.add.text(config.width * 0.5, config.height * 0.80, " Appuyez sur ENTREE pour commencer ", { fontFamily: 'Lacquer', fontSize: '100px', fill: "#ffffff", align: 'center' }).setOrigin(0.5);

    this.titleTxt.alpha = 0;
    this.messageTxt.alpha = 0;
    //animation des drapeaux


    //ici on saite que le tween est terminé
    this.tweens.add({
      targets: this.titleTxt,
      alpha: 1,
      scaleX: { from: 10, to: 1 },
      scaleY: { from: 10, to: 1 },
      duration: 1000,
      ease: "Bounce"
    }).on("complete", function () {


      this.perso.play('jump');
      this.tweens.add({
        targets: this.perso,
        y: 450,
        duration: 200,
        delay: 600,
        yoyo: true,
      })

      this.tweens.add({
        targets: this.bombe_left,
        x: { from: -300, to: 2000 },
        delay: 0
      })
      this.tweens.add({
        targets: this.messageTxt,
        alpha: 1,
        duration: 1000,
        yoyo: true,
        repeat: -1
      })
    }, this);


    //détection de touche

    this.enterKey = this.input.keyboard.addKey("ENTER");

  },
  update: function () {

    //vérifier si la touche enter est enfoncée

    if (this.enterKey.isDown) {
      this.scene.start("Game");
    }
  }
});

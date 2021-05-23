var Game = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function Game() {
        Phaser.Scene.call(this, {
            key: 'Game'
        })
    },
    preload: function () {
        this.load.image("bg", "../assets/images/bg.jpg");
        this.load.image("bombe", "../assets/images/bombe.png");
        for (var i = 1; i < 38; i++) {
            this.load.image("man" + i, "../assets/spritesheet/man" + i + ".png")
        };
    },
    create: function () {
        this.add.image(0, 0, "bg").setOrigin(0);
        this.perso = this.add.sprite(config.width * 0.5,
            config.height * 0.612, 'man1');
        let frames_jump = [];

        for (var i = 12; i < 38; i++) {
            frames_jump.push({ key: "man" + i });
        };

        this.anims.create({
            key: 'jump2',
            frames: frames_jump,
            frameRate: 24,
            repeat: 0,
        });
        this.spaceKey = this.input.keyboard.addKey("SPACE");
    },

    addScore: function (scoreToAdd) {
        this.score += scoreToAdd;
        this.scoreTxt.text = this.score;
    },
    startRound: function () {
        this.currentFlag = this.generateFlag();
        this.currentFlagTween = this.animateFlag();
    },
    update: function () {
        if (this.spaceKey.isDown) {
            this.perso.play('jump2');
            this.tweens.add({
                targets: this.perso,
                y: { from: config.height * 0.612, to: 450 },
                duration: 200,
                yoyo: true
            })

        }
    }
});
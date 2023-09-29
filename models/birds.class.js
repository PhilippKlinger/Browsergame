class Bird extends MoveableObject {
    height = 50;
    width = 60;
    allowFlying = false;

    IMAGES_FLYING = [
        './img/1_editables/Flying Monster - 01/Idle_000.png',
        './img/1_editables/Flying Monster - 01/Idle_001.png',
        './img/1_editables/Flying Monster - 01/Idle_002.png',
        './img/1_editables/Flying Monster - 01/Idle_003.png',
        './img/1_editables/Flying Monster - 01/Idle_004.png',
        './img/1_editables/Flying Monster - 01/Idle_005.png',
        './img/1_editables/Flying Monster - 01/Idle_006.png',
        './img/1_editables/Flying Monster - 01/Idle_007.png',
        './img/1_editables/Flying Monster - 01/Idle_008.png',
        './img/1_editables/Flying Monster - 01/Idle_009.png',
        './img/1_editables/Flying Monster - 01/Idle_010.png',
        './img/1_editables/Flying Monster - 01/Idle_011.png',
        './img/1_editables/Flying Monster - 01/Idle_012.png',
        './img/1_editables/Flying Monster - 01/Idle_013.png',
        './img/1_editables/Flying Monster - 01/Idle_014.png',
        './img/1_editables/Flying Monster - 01/Idle_015.png',
        './img/1_editables/Flying Monster - 01/Idle_016.png',
        './img/1_editables/Flying Monster - 01/Idle_017.png'
    ];

    constructor() {
        super().loadImage(this.IMAGES_FLYING[0]);
        this.loadImages(this.IMAGES_FLYING);
        this.y = 20 + Math.random() * 80;
        this.x = -700 + Math.random() * 600;
        this.speed = 4 + Math.random() * 0.8;
        this.animate();
    }

    animate() {
        setInterval(() => {
            if (world && this.allowFlying && world.character.x >110 && !world.gamePaused) {
                this.moveRight();
                this.playAnimation(this.IMAGES_FLYING);
            }
        }, 1000 / 30);

        setTimeout(() => {
            this.allowFlying = true;
        }, 2000);
    }

}
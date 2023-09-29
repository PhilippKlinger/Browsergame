class Boar extends MoveableObject {
    height = 100;
    width = 120;
    y = 300;
    offsetHeight = 30;
    offsetWidth = 15;
    allowWalking = false;
    gruntingSound = new Audio('./audio/boargrunting.mp3');

    IMAGES_WALKING = [
        './img/3_enemies_boar/boar/Walking/Walking_000.png',
        './img/3_enemies_boar/boar/Walking/Walking_001.png',
        './img/3_enemies_boar/boar/Walking/Walking_002.png',
        './img/3_enemies_boar/boar/Walking/Walking_003.png',
        './img/3_enemies_boar/boar/Walking/Walking_004.png',
        './img/3_enemies_boar/boar/Walking/Walking_005.png',
        './img/3_enemies_boar/boar/Walking/Walking_006.png',
        './img/3_enemies_boar/boar/Walking/Walking_007.png',
        './img/3_enemies_boar/boar/Walking/Walking_008.png',
        './img/3_enemies_boar/boar/Walking/Walking_009.png',
        './img/3_enemies_boar/boar/Walking/Walking_010.png',
        './img/3_enemies_boar/boar/Walking/Walking_011.png',
        './img/3_enemies_boar/boar/Walking/Walking_012.png',
        './img/3_enemies_boar/boar/Walking/Walking_013.png',
        './img/3_enemies_boar/boar/Walking/Walking_014.png',
        './img/3_enemies_boar/boar/Walking/Walking_015.png',
        './img/3_enemies_boar/boar/Walking/Walking_016.png',
        './img/3_enemies_boar/boar/Walking/Walking_017.png'
    ];

    IMAGES_HURTING = [
        './img/3_enemies_boar/boar/Hurt/Hurt_000.png',
        './img/3_enemies_boar/boar/Hurt/Hurt_001.png',
        './img/3_enemies_boar/boar/Hurt/Hurt_002.png',
        './img/3_enemies_boar/boar/Hurt/Hurt_003.png',
        './img/3_enemies_boar/boar/Hurt/Hurt_004.png',
        './img/3_enemies_boar/boar/Hurt/Hurt_005.png',
        './img/3_enemies_boar/boar/Hurt/Hurt_006.png',
        './img/3_enemies_boar/boar/Hurt/Hurt_007.png',
        './img/3_enemies_boar/boar/Hurt/Hurt_008.png'
    ];

    IMAGES_DYING = [
        './img/3_enemies_boar/boar/Dying/Dying_000.png',
        './img/3_enemies_boar/boar/Dying/Dying_001.png',
        './img/3_enemies_boar/boar/Dying/Dying_002.png',
        './img/3_enemies_boar/boar/Dying/Dying_003.png',
        './img/3_enemies_boar/boar/Dying/Dying_004.png',
        './img/3_enemies_boar/boar/Dying/Dying_005.png',
        './img/3_enemies_boar/boar/Dying/Dying_006.png',
        './img/3_enemies_boar/boar/Dying/Dying_007.png',
        './img/3_enemies_boar/boar/Dying/Dying_008.png',
        './img/3_enemies_boar/boar/Dying/Dying_009.png',
        './img/3_enemies_boar/boar/Dying/Dying_010.png'
    ];

    constructor(x) {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_HURTING);
        this.loadImages(this.IMAGES_DYING);
        this.x = x + Math.random() * 200;
        this.speed = 1.4 + Math.random() * 1;
        this.health = 2;
        this.animate();
    }

    animate() {

        setInterval(() => {
            if (world && this.allowWalking && !this.isDead() && world.character.x > 110 && world.character.x > (this.x - 700) && !world.gamePaused) {
                this.playAnimation(this.IMAGES_WALKING);
                this.moveLeft();
            }
        }, 1000 / 30);


        setInterval(() => {
            if (this.isDead()) {
                //no damage to chracater
                this.stopMoving();
                this.playAnimation(this.IMAGES_DYING);
                setTimeout(() => {
                    this.stopAnimation(this.IMAGES_DYING);
                }, 150);
            } else if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURTING);
            }
        }, 1000 / 30);

        setTimeout(() => {
            this.allowWalking = true;
        }, 1000);
    }
}



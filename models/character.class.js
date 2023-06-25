class Character extends MoveableObject {
    height = 200;
    width = 180;
    y = 74; //230
    x = 100;
    world;
    speed = 10;
    walkingSound = new Audio('./audio/walking.mp3')

    IMAGES_WALKING = [
        './img/2_character_maya/Walking/Walking_000.png',
        './img/2_character_maya/Walking/Walking_001.png',
        './img/2_character_maya/Walking/Walking_002.png',
        './img/2_character_maya/Walking/Walking_003.png',
        './img/2_character_maya/Walking/Walking_004.png',
        './img/2_character_maya/Walking/Walking_005.png',
        './img/2_character_maya/Walking/Walking_006.png',
        './img/2_character_maya/Walking/Walking_007.png',
        './img/2_character_maya/Walking/Walking_008.png',
        './img/2_character_maya/Walking/Walking_009.png',
        './img/2_character_maya/Walking/Walking_010.png',
        './img/2_character_maya/Walking/Walking_011.png',
        './img/2_character_maya/Walking/Walking_012.png',
        './img/2_character_maya/Walking/Walking_013.png',
        './img/2_character_maya/Walking/Walking_014.png',
        './img/2_character_maya/Walking/Walking_015.png',
        './img/2_character_maya/Walking/Walking_016.png',
        './img/2_character_maya/Walking/Walking_017.png',
        './img/2_character_maya/Walking/Walking_018.png',
        './img/2_character_maya/Walking/Walking_019.png',
        './img/2_character_maya/Walking/Walking_020.png',
        './img/2_character_maya/Walking/Walking_021.png',
        './img/2_character_maya/Walking/Walking_022.png',
        './img/2_character_maya/Walking/Walking_023.png'
    ];

    IMAGES_ATTACKING = [
        './img/2_character_maya/Attacking/Attacking_000.png',
        './img/2_character_maya/Attacking/Attacking_001.png',
        './img/2_character_maya/Attacking/Attacking_002.png',
        './img/2_character_maya/Attacking/Attacking_003.png',
        './img/2_character_maya/Attacking/Attacking_004.png',
        './img/2_character_maya/Attacking/Attacking_005.png',
        './img/2_character_maya/Attacking/Attacking_006.png',
        './img/2_character_maya/Attacking/Attacking_007.png',
        './img/2_character_maya/Attacking/Attacking_008.png',
        './img/2_character_maya/Attacking/Attacking_009.png',
        './img/2_character_maya/Attacking/Attacking_010.png',
        './img/2_character_maya/Attacking/Attacking_011.png'
    ];

    IMAGES_JUMPING = [
        './img/2_character_maya/Jumping/Jump_000.png',
        './img/2_character_maya/Jumping/Jump_001.png',
        './img/2_character_maya/Jumping/Jump_002.png',
        './img/2_character_maya/Jumping/Jump_003.png',
        './img/2_character_maya/Jumping/Jump_004.png',
        './img/2_character_maya/Jumping/Jump_005.png',
        './img/2_character_maya/Jumping/Jump_006.png',
        './img/2_character_maya/Jumping/Jump_007.png',
        './img/2_character_maya/Jumping/Jump_008.png',
        './img/2_character_maya/Jumping/Jump_009.png',
        './img/2_character_maya/Jumping/Jump_010.png',
        './img/2_character_maya/Jumping/Jump_011.png'
    ];

    constructor() {
        super().loadImage('./img/2_character_maya/Walking/Walking_000.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_ATTACKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.animate();
        this.applyGravity();
    }

    animate() {
        setInterval(() => {
            this.walkingSound.pause();
            if (this.world.keyboard.ARROWRIGHT && this.x < this.world.level.levelEndpointX) {
                this.moveRight();
                this.walkingSound.play();
            }
            if (this.world.keyboard.ARROWLEFT && this.x > 100) {
                this.moveLeft();
                this.walkingSound.play();
            }
            if (this.world.keyboard.SPACE && !this.isAboveGround()) {
                this.jump();
            }
            this.world.cameraX = -this.x + 100;
        }, 1000 / 60);

        setInterval(() => {
            if (this.isAboveGround()) {
                this.playAnimation(this.IMAGES_JUMPING);
            } else {
                if ((this.world.keyboard.ARROWRIGHT && this.x < this.world.level.levelEndpointX) || (this.world.keyboard.ARROWLEFT && this.x > 100)) {
                    this.playAnimation(this.IMAGES_WALKING);
                }
            }
        }, 1000 / 60);
    }
}

/**
 *  setInterval(() => {
            if (this.world.keyboard.ARROWUP) {
                let i = this.currentImage % this.IMAGES_ATTACKING.length;
                let path = this.IMAGES_ATTACKING[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            }
        }, 1000 / 30);
 */
class Character extends MoveableObject {
    height = 200;
    width = 180;
    y = 230;
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

    constructor() {
        super().loadImage('./img/2_character_maya/Walking/Walking_000.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_ATTACKING);
        this.animate();
    }


    animate() {
        setInterval(() => {
            this.walkingSound.pause();
            if (this.world.keyboard.ARROWRIGHT && this.x < this.world.level.levelEndpointX) {
                this.x += this.speed;
                this.otherDirection = false;
                this.walkingSound.play();
            }
            if (this.world.keyboard.ARROWLEFT && this.x > 100) {
                this.x -= this.speed;
                this.otherDirection = true;
                this.walkingSound.play();
            }
            
            this.world.cameraX = -this.x + 100;
        }, 1000 / 60);

        setInterval(() => {
            if (this.world.keyboard.ARROWRIGHT || this.world.keyboard.ARROWLEFT) {
                let i = this.currentImage % this.IMAGES_WALKING.length;
                let path = this.IMAGES_WALKING[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            }
        }, 1000 / 60);

        setInterval(() => {
            if (this.world.keyboard.ARROWUP) {
                let i = this.currentImage % this.IMAGES_ATTACKING.length;
                let path = this.IMAGES_ATTACKING[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            }
        }, 1000 / 30);
    }
}
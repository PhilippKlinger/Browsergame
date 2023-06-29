class Character extends MoveableObject {
    height = 200;
    width = 180;
    y = 240;
    x = 100;
    offsetHeight = 40;
    offsetWidth = 100;
    world;
    speed = 10;
    walkingSound = new Audio('./audio/walking.mp3');

    IMAGES_IDLE = [
        './img/2_character_maya/Idle/Idle_000.png',
        './img/2_character_maya/Idle/Idle_001.png',
        './img/2_character_maya/Idle/Idle_002.png',
        './img/2_character_maya/Idle/Idle_003.png',
        './img/2_character_maya/Idle/Idle_004.png',
        './img/2_character_maya/Idle/Idle_005.png',
        './img/2_character_maya/Idle/Idle_006.png',
        './img/2_character_maya/Idle/Idle_007.png',
        './img/2_character_maya/Idle/Idle_008.png',
        './img/2_character_maya/Idle/Idle_009.png',
        './img/2_character_maya/Idle/Idle_010.png',
        './img/2_character_maya/Idle/Idle_011.png',
        './img/2_character_maya/Idle/Idle_012.png',
        './img/2_character_maya/Idle/Idle_013.png',
        './img/2_character_maya/Idle/Idle_014.png',
        './img/2_character_maya/Idle/Idle_015.png',
        './img/2_character_maya/Idle/Idle_016.png',
        './img/2_character_maya/Idle/Idle_017.png'
    ];

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

    IMAGES_DYING = [
        './img/2_character_maya/Dying/Dying_000.png',
        './img/2_character_maya/Dying/Dying_001.png',
        './img/2_character_maya/Dying/Dying_002.png',
        './img/2_character_maya/Dying/Dying_003.png',
        './img/2_character_maya/Dying/Dying_004.png',
        './img/2_character_maya/Dying/Dying_005.png',
        './img/2_character_maya/Dying/Dying_006.png',
        './img/2_character_maya/Dying/Dying_007.png',
        './img/2_character_maya/Dying/Dying_008.png',
        './img/2_character_maya/Dying/Dying_009.png',
        './img/2_character_maya/Dying/Dying_010.png',
        './img/2_character_maya/Dying/Dying_011.png',
        './img/2_character_maya/Dying/Dying_012.png',
        './img/2_character_maya/Dying/Dying_013.png',
        './img/2_character_maya/Dying/Dying_014.png'
    ];

    IMAGES_HURTING = [
        './img/2_character_maya/Hurt/Hurt_000.png',
        './img/2_character_maya/Hurt/Hurt_001.png',
        './img/2_character_maya/Hurt/Hurt_002.png',
        './img/2_character_maya/Hurt/Hurt_003.png',
        './img/2_character_maya/Hurt/Hurt_004.png',
        './img/2_character_maya/Hurt/Hurt_005.png',
        './img/2_character_maya/Hurt/Hurt_006.png',
        './img/2_character_maya/Hurt/Hurt_007.png',
        './img/2_character_maya/Hurt/Hurt_008.png',
        './img/2_character_maya/Hurt/Hurt_009.png',
        './img/2_character_maya/Hurt/Hurt_010.png',
        './img/2_character_maya/Hurt/Hurt_011.png'
    ];

    IMAGES_THROWING = [
        './img/2_character_maya/Throwing/Throwing_000.png',
        './img/2_character_maya/Throwing/Throwing_001.png',
        './img/2_character_maya/Throwing/Throwing_002.png',
        './img/2_character_maya/Throwing/Throwing_003.png',
        './img/2_character_maya/Throwing/Throwing_004.png',
        './img/2_character_maya/Throwing/Throwing_005.png',
        './img/2_character_maya/Throwing/Throwing_006.png',
        './img/2_character_maya/Throwing/Throwing_007.png',
        './img/2_character_maya/Throwing/Throwing_008.png',
        './img/2_character_maya/Throwing/Throwing_009.png',
        './img/2_character_maya/Throwing/Throwing_010.png',
        './img/2_character_maya/Throwing/Throwing_011.png'
    ];

    IMAGES_SLIDING = [
        './img/2_character_maya/Sliding/Sliding_000.png',
        './img/2_character_maya/Sliding/Sliding_001.png',
        './img/2_character_maya/Sliding/Sliding_002.png',
        './img/2_character_maya/Sliding/Sliding_003.png',
        './img/2_character_maya/Sliding/Sliding_004.png',
        './img/2_character_maya/Sliding/Sliding_005.png'
    ];

    IMAGES_FALLING = [
        './img/2_character_maya/Falling/Falling_000.png',
        './img/2_character_maya/Falling/Falling_001.png',
        './img/2_character_maya/Falling/Falling_002.png',
        './img/2_character_maya/Falling/Falling_003.png',
        './img/2_character_maya/Falling/Falling_004.png',
        './img/2_character_maya/Falling/Falling_005.png'
    ];

    IMAGES_KICKING = [
        './img/2_character_maya/Kicking/Kicking_000.png',
        './img/2_character_maya/Kicking/Kicking_001.png',
        './img/2_character_maya/Kicking/Kicking_002.png',
        './img/2_character_maya/Kicking/Kicking_003.png',
        './img/2_character_maya/Kicking/Kicking_004.png',
        './img/2_character_maya/Kicking/Kicking_005.png',
        './img/2_character_maya/Kicking/Kicking_006.png',
        './img/2_character_maya/Kicking/Kicking_007.png',
        './img/2_character_maya/Kicking/Kicking_008.png',
        './img/2_character_maya/Kicking/Kicking_009.png',
        './img/2_character_maya/Kicking/Kicking_010.png',
        './img/2_character_maya/Kicking/Kicking_011.png'
    ];

    constructor() {
        super().loadImage('./img/2_character_maya/Walking/Walking_000.png');
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_ATTACKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_DYING);
        this.loadImages(this.IMAGES_HURTING);
        this.loadImages(this.IMAGES_THROWING);
        this.loadImages(this.IMAGES_SLIDING);
        this.loadImages(this.IMAGES_FALLING);
        this.loadImages(this.IMAGES_KICKING);
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
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DYING);
                setTimeout(() => {
                    this.stopAnimation(this.IMAGES_DYING);
                }, 150);
            } else if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURTING);
                setTimeout(() => {
                    this.stopAnimation(this.IMAGES_HURTING);
                }, 200);
            } else if (this.isAboveGround()) {
                this.playAnimation(this.IMAGES_JUMPING);
                setTimeout(() => {
                    this.stopAnimation(this.IMAGES_JUMPING);
                }, 100);
            } else if (this.world.keyboard.S) {
                if (!this.otherDirection) {
                    this.slideRight();
                } else {
                    this.slideLeft();
                }
                this.playAnimation(this.IMAGES_SLIDING);
            }
            else {
                if ((this.world.keyboard.ARROWRIGHT && this.x < this.world.level.levelEndpointX) || (this.world.keyboard.ARROWLEFT && this.x > 100)) {
                    this.playAnimation(this.IMAGES_WALKING);
                }
            }
        }, 1000 / 60);

        setInterval(() => {
            if (!this.isDead()) {
                if (this.world.keyboard.ARROWUP) {
                    this.playAnimation(this.IMAGES_ATTACKING);
                } else if (this.world.keyboard.NOKEY) {
                    this.playAnimation(this.IMAGES_IDLE);
                } else if (this.world.keyboard.D) {
                    this.playAnimation(this.IMAGES_THROWING);
                }
            }
        }, 1000 / 30);

        setInterval(() => {
            if(this.world.keyboard.H) {
                console.log(this.x);
            }
            
        }, 1000);
    }
}
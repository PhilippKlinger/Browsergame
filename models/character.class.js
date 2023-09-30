class Character extends MoveableObject {
    height = 200;
    width = 180;
    y = 240;
    x = 100;
    offsetHeight = 50;
    offsetWidth = 100;
    world;
    speed = 10;
    soundIndex = 0;
    encounterEndboss = false;
    walkingSound = new Audio('./audio/walking.mp3');
    attackingSound = new Audio('./audio/hit.mp3');
    jumpingSound = new Audio('./audio/jumping2.mp3');
    throwingSound = new Audio('./audio/throwing.mp3');
    hurtingSound = [new Audio('./audio/hurting2.mp3'), new Audio('./audio/hurting3.mp3'),
    new Audio('./audio/hurting4.mp3'), new Audio('./audio/hurting5.mp3'),
    new Audio('./audio/hurting6.mp3')];
    dyingSound = new Audio('./audio/dying.mp3');
    slidingSound = new Audio('./audio/sliding2.mp3');

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
        this.animate();
        this.applyGravity();
    }

    /**
    * Kicks off the animation routines and related behavior for the character.
    */
    animate() {
        setInterval(() => this.moveCharacter(), 1000 / 60);
        setInterval(() => this.playCharacterAnimations(), 1000 / 60);
        setInterval(() => this.playCharacterAnimations2(), 1000 / 30);
        setInterval(() => {
            if (this.isHurt()) {
                this.soundIndex = Math.floor(Math.random() * this.hurtingSound.length);
            }
        }, 1000);
    }

    /**
     * Handles the character's movement logic based on input and current conditions.
     */
    moveCharacter() {
        this.walkingSound.pause();
        if (!this.isDead()) {
            if (this.allowMoveRight()) {
                this.moveCharacterRight();
            }
            if (this.allowMoveLeft()) {
                this.moveCharacterLeft();
            }
            if (this.allowJump()) {
                this.moveCharacterJump();
            }
            if (this.world.keyboard.S) {
                this.moveCharacterSlide();
            }
            this.world.cameraX = -this.x + 100;
        }
    }

    /**
    * Handles the character's movement to the right and sound.
    */
    moveCharacterRight() {
        this.moveRight();
        this.walkingSound.play();
    }

    /**
    * Handles the character's movement to the left and sound.
    */
    moveCharacterLeft() {
        this.moveLeft();
        this.walkingSound.play();
    }

    /**
    * Handles the character's movement jump and sound.
    */
    moveCharacterJump() {
        this.jump();
        this.jumpingSound.play();
    }

    /**
    * Handles the character's movement slide and sound.
    */
    moveCharacterSlide() {
        this.slide();
        this.slidingSound.play();
    }

    /**
    * Determines if the character is allowed to move right.
    * @returns {boolean} Returns true if the character can move right, otherwise false.
    */
    allowMoveRight() {
        return this.world.keyboard.ARROWRIGHT && this.x < this.world.level.levelEndpointX && !this.isBouncingBack && !this.encounterEndboss;
    }

    /**
    * Determines if the character is allowed to move left.
    * @returns {boolean} Returns true if the character can move left, otherwise false.
    */
    allowMoveLeft() {
        return this.world.keyboard.ARROWLEFT && this.x > 100;
    }

    /**
    * Determines if the character is allowed to jump.
    * @returns {boolean} Returns true if the character can jump, otherwise false.
    */
    allowJump() {
        return this.world.keyboard.SPACE && !this.isAboveGround();
    }

    /**
    * Handles the character's animation routines based on its current state.
    */
    playCharacterAnimations() {
        if (this.isDead()) {
            this.playAnimationDead();
        } else if (this.isHurt() && !this.isAboveGround()) {
            this.playAnimationHurt();
        } else if (this.isAboveGround()) {
            this.playAnimationJump();
        } else if (this.slideDistance > 0) {
            this.playAnimation(this.IMAGES_SLIDING);
        } else if (this.allowPlayAnimationWalking()) {
            this.playAnimation(this.IMAGES_WALKING);
        }
    }

    /**
    * Manages the animation sequence for the character when dead.
    */
    playAnimationDead() {
        this.playAnimation(this.IMAGES_DYING);
        setTimeout(() => {
            this.stopAnimation(this.IMAGES_DYING);
        }, 150);
    }

    /**
    * Manages the animation sequence for the character when hurt.
    */
    playAnimationHurt() {
        this.hurtingSound[this.soundIndex].play();
        this.playAnimation(this.IMAGES_HURTING);
        setTimeout(() => {
            this.stopAnimation(this.IMAGES_HURTING);
        }, 200);
    }

    /**
    * Manages the animation sequence for the character when jumping.
    */
    playAnimationJump() {
        this.playAnimation(this.IMAGES_JUMPING);
        setTimeout(() => {
            this.stopAnimation(this.IMAGES_JUMPING);
        }, 50);
    }

    /**
    * Determines if the walking animation for the character should play.
    * @returns {boolean} Returns true if conditions for playing the walking animation are met, otherwise false.
    */
    allowPlayAnimationWalking() {
        return ((this.world.keyboard.ARROWRIGHT && this.x < this.world.level.levelEndpointX) || (this.world.keyboard.ARROWLEFT && this.x > 100));
    }

    /**
    * Handles additional animation routines for the character based on its current state.
    */
    playCharacterAnimations2() {
        if (!this.isDead()) {
            if (this.world.keyboard.ARROWDOWN) {
                this.playAnimationAttack();
            } else if (this.world.keyboard.NOKEY && !this.isAboveGround() && !this.isBouncingBack) {
                this.playAnimationIdle();
            } else if (this.world.keyboard.D && this.world.canThrow()) {
                this.playAnimationThrow();
            }
        }
    }

    /**
    * Manages the animation sequence for the character when attacking.
    */
    playAnimationAttack() {
        this.attackingSound.play();
        this.playAnimation(this.IMAGES_ATTACKING);
    }

    /**
     * Manages the animation sequence for the character when idle.
     */
    playAnimationIdle() {
        this.slidingSound.pause();
        this.resetSlideDistance();
        this.playAnimation(this.IMAGES_IDLE);
    }

    /**
    * Manages the animation sequence for the character when throwing.
    */
    playAnimationThrow() {
        this.throwingSound.play();
        this.playAnimation(this.IMAGES_THROWING);
    }

    /**
    * Checks if the character is jumping on a boar enemy.
    * @param {Object} enemy - The enemy object to check against.
    * @returns {boolean} Returns true if the character is jumping on the boar, otherwise false.
    */
    isJumpingOnBoar(enemy) {
        return this.isColliding(enemy) && this.isAboveGround() && this.speedY < 0;
    }
}
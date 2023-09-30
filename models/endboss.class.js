class Endboss extends MoveableObject {
    height = 280;
    width = 459;  //Faktor height*1,64
    y = 120;
    speed = 8;
    spiderwebs = 10;
    offsetHeight = 40;
    offsetWidth = 100;
    attackStartpoint = 5000;
    attackEndpoint = 4500;
    startAttack = false;
    startHit = false;
    startThrow = false;
    movingLeft = false;
    movingRight = false;
    encounterSound = new Audio('./audio/spiderEncounter2.mp3');

    IMAGES_WALKING = [
        './img/4_enemie_boss_blackwidow/1_walk/__purple_black_widow_move_000.png',
        './img/4_enemie_boss_blackwidow/1_walk/__purple_black_widow_move_001.png',
        './img/4_enemie_boss_blackwidow/1_walk/__purple_black_widow_move_002.png',
        './img/4_enemie_boss_blackwidow/1_walk/__purple_black_widow_move_003.png',
        './img/4_enemie_boss_blackwidow/1_walk/__purple_black_widow_move_004.png',
        './img/4_enemie_boss_blackwidow/1_walk/__purple_black_widow_move_005.png',
        './img/4_enemie_boss_blackwidow/1_walk/__purple_black_widow_move_006.png',
        './img/4_enemie_boss_blackwidow/1_walk/__purple_black_widow_move_007.png',
        './img/4_enemie_boss_blackwidow/1_walk/__purple_black_widow_move_000.png',
        './img/4_enemie_boss_blackwidow/1_walk/__purple_black_widow_move_001.png',
        './img/4_enemie_boss_blackwidow/1_walk/__purple_black_widow_move_002.png',
        './img/4_enemie_boss_blackwidow/1_walk/__purple_black_widow_move_003.png',
        './img/4_enemie_boss_blackwidow/1_walk/__purple_black_widow_move_004.png',
        './img/4_enemie_boss_blackwidow/1_walk/__purple_black_widow_move_005.png',
        './img/4_enemie_boss_blackwidow/1_walk/__purple_black_widow_move_006.png',
        './img/4_enemie_boss_blackwidow/1_walk/__purple_black_widow_move_007.png'
    ];

    IMAGES_IDLE = [
        './img/4_enemie_boss_blackwidow/6_idle/__purple_black_widow_idle_001.png',
        './img/4_enemie_boss_blackwidow/6_idle/__purple_black_widow_idle_002.png',
        './img/4_enemie_boss_blackwidow/6_idle/__purple_black_widow_idle_003.png',
        './img/4_enemie_boss_blackwidow/6_idle/__purple_black_widow_idle_004.png',
        './img/4_enemie_boss_blackwidow/6_idle/__purple_black_widow_idle_005.png',
        './img/4_enemie_boss_blackwidow/6_idle/__purple_black_widow_idle_006.png',
        './img/4_enemie_boss_blackwidow/6_idle/__purple_black_widow_idle_007.png',
        './img/4_enemie_boss_blackwidow/6_idle/__purple_black_widow_idle_008.png',
        './img/4_enemie_boss_blackwidow/6_idle/__purple_black_widow_idle_009.png',
        './img/4_enemie_boss_blackwidow/6_idle/__purple_black_widow_idle_010.png',
        './img/4_enemie_boss_blackwidow/6_idle/__purple_black_widow_idle_011.png',
        './img/4_enemie_boss_blackwidow/6_idle/__purple_black_widow_idle_012.png',
        './img/4_enemie_boss_blackwidow/6_idle/__purple_black_widow_idle_013.png',
        './img/4_enemie_boss_blackwidow/6_idle/__purple_black_widow_idle_014.png',
        './img/4_enemie_boss_blackwidow/6_idle/__purple_black_widow_idle_015.png',
        './img/4_enemie_boss_blackwidow/6_idle/__purple_black_widow_idle_016.png',
        './img/4_enemie_boss_blackwidow/6_idle/__purple_black_widow_idle_017.png',
        './img/4_enemie_boss_blackwidow/6_idle/__purple_black_widow_idle_018.png',
        './img/4_enemie_boss_blackwidow/6_idle/__purple_black_widow_idle_019.png'
    ];

    IMAGES_THROWING = [
        './img/4_enemie_boss_blackwidow/2_throw/__purple_black_widow_squirt_web_000.png',
        './img/4_enemie_boss_blackwidow/2_throw/__purple_black_widow_squirt_web_001.png',
        './img/4_enemie_boss_blackwidow/2_throw/__purple_black_widow_squirt_web_002.png',
        './img/4_enemie_boss_blackwidow/2_throw/__purple_black_widow_squirt_web_003.png',
        './img/4_enemie_boss_blackwidow/2_throw/__purple_black_widow_squirt_web_004.png',
        './img/4_enemie_boss_blackwidow/2_throw/__purple_black_widow_squirt_web_005.png',
        './img/4_enemie_boss_blackwidow/2_throw/__purple_black_widow_squirt_web_006.png',
        './img/4_enemie_boss_blackwidow/2_throw/__purple_black_widow_squirt_web_007.png',
        './img/4_enemie_boss_blackwidow/2_throw/__purple_black_widow_squirt_web_008.png',
        './img/4_enemie_boss_blackwidow/2_throw/__purple_black_widow_squirt_web_009.png'
    ];

    IMAGES_ATTACKING = [
        './img/4_enemie_boss_blackwidow/3_attack/__purple_black_widow_bite_000.png',
        './img/4_enemie_boss_blackwidow/3_attack/__purple_black_widow_bite_001.png',
        './img/4_enemie_boss_blackwidow/3_attack/__purple_black_widow_bite_002.png',
        './img/4_enemie_boss_blackwidow/3_attack/__purple_black_widow_bite_003.png',
        './img/4_enemie_boss_blackwidow/3_attack/__purple_black_widow_bite_004.png',
        './img/4_enemie_boss_blackwidow/3_attack/__purple_black_widow_bite_005.png',
        './img/4_enemie_boss_blackwidow/3_attack/__purple_black_widow_bite_006.png',
        './img/4_enemie_boss_blackwidow/3_attack/__purple_black_widow_bite_000.png',
        './img/4_enemie_boss_blackwidow/3_attack/__purple_black_widow_bite_001.png',
        './img/4_enemie_boss_blackwidow/3_attack/__purple_black_widow_bite_002.png',
        './img/4_enemie_boss_blackwidow/3_attack/__purple_black_widow_bite_003.png',
        './img/4_enemie_boss_blackwidow/3_attack/__purple_black_widow_bite_004.png',
        './img/4_enemie_boss_blackwidow/3_attack/__purple_black_widow_bite_005.png',
        './img/4_enemie_boss_blackwidow/3_attack/__purple_black_widow_bite_006.png'
    ];

    IMAGES_HURTING = [
        './img/4_enemie_boss_blackwidow/4_hurt/__purple_black_widow_hurt_000.png',
        './img/4_enemie_boss_blackwidow/4_hurt/__purple_black_widow_hurt_001.png',
        './img/4_enemie_boss_blackwidow/4_hurt/__purple_black_widow_hurt_002.png',
        './img/4_enemie_boss_blackwidow/4_hurt/__purple_black_widow_hurt_003.png',
        './img/4_enemie_boss_blackwidow/4_hurt/__purple_black_widow_hurt_004.png'
    ];

    IMAGES_DYING = [
        './img/4_enemie_boss_blackwidow/5_dead/__purple_black_widow_die_000.png',
        './img/4_enemie_boss_blackwidow/5_dead/__purple_black_widow_die_001.png',
        './img/4_enemie_boss_blackwidow/5_dead/__purple_black_widow_die_002.png',
        './img/4_enemie_boss_blackwidow/5_dead/__purple_black_widow_die_003.png',
        './img/4_enemie_boss_blackwidow/5_dead/__purple_black_widow_die_004.png'
    ];

    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_THROWING);
        this.loadImages(this.IMAGES_ATTACKING);
        this.loadImages(this.IMAGES_HURTING);
        this.loadImages(this.IMAGES_DYING);
        this.loadImages(this.IMAGES_IDLE);
        this.x = this.attackStartpoint;
        this.animate();
        this.startThrowTimer();
    }

     /**
     * Initialize and starts the animations related to the end boss character.
     */
    animate() {
        setInterval(() => this.playEndbossAnimation(), 1000 / 15);
        setInterval(() => this.playEndbossAnimation2(), 1000 / 15);
    }

    /**
     * Determines which animation the end boss should play based on various conditions.
     */
    playEndbossAnimation() {
        if (this.allowIdle()) {
            this.playEndbossAnimationIdle();
        } else if (this.allowWalking()) {
            this.playEndbossAnimationWalking();
        } else if (this.allowAttacking()) {
            this.playEndbossAnimationAttacking();
        } else if (this.allowThrowing()) {
            this.playAnimation(this.IMAGES_THROWING);
        } else if (!this.isDead() && !this.startHit) {
            this.playAnimation(this.IMAGES_IDLE);
        }
    }

    /**
     * Plays the attacking animation for the end boss.
     */
    playEndbossAnimationAttacking() {
        this.playAnimation(this.IMAGES_ATTACKING);
        this.stopMoving();
    }

    /**
     * Plays the walking animation for the end boss.
     */
    playEndbossAnimationWalking() {
        this.playAnimation(this.IMAGES_WALKING);
        this.moveLeft();
    }

    /**
     * Plays the idle animation for the end boss.
     */
    playEndbossAnimationIdle() {
        this.playAnimation(this.IMAGES_IDLE);
        this.stopMoving();
    }

    /**
     * Determines if the end boss should be in idle state.
     * @returns {boolean} Returns true if conditions for idle state are met.
     */
    allowIdle() {
        return !this.isDead() && !this.startAttack && !this.startHit && this.x == this.attackStartpoint;
    }

    /**
     * Determines if the end boss should be walking.
     * @returns {boolean} Returns true if conditions for walking are met.
     */
    allowWalking() {
        return !this.isDead() && this.startAttack && !this.startHit && this.x > this.attackEndpoint;
    }

    /**
     * Determines if the end boss should be attacking.
     * @returns {boolean} Returns true if conditions for attacking are met.
     */
    allowAttacking() {
        return !this.isDead() && this.startHit;
    }

     /**
     * Determines if the end boss should be throwing.
     * @returns {boolean} Returns true if conditions for throwing are met.
     */
    allowThrowing() {
        return !this.isDead() && !this.startHit && this.startThrow;
    }

    /**
     * Determines other animations the end boss should play, especially when dying or getting hurt.
     */
    playEndbossAnimation2() {
        if (this.isDead()) {
            this.playEndbossAnimationDying();
        } else if (!this.isDead() && this.isHurt()) {
            this.playAnimation(this.IMAGES_HURTING);
        }
    }

    /**
     * Plays the dying animation for the end boss.
     */
    playEndbossAnimationDying() {
        this.stopMoving();
        this.playAnimation(this.IMAGES_DYING);
        setTimeout(() => {
            this.stopAnimation(this.IMAGES_DYING);
        }, 150);
    }

    /**
     * Starts a timer to check conditions for the end boss to throw.
     */
    startThrowTimer() {
        setInterval(() => {
            if (this.x < this.attackEndpoint && this.spiderwebs > 0) {
                this.startThrow = true;
                this.spiderwebs--;
                setTimeout(() => {
                    this.startThrow = false;
                }, 400);
            }
        }, 3000);
    }
}
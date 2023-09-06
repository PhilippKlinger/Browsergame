class Endboss extends MoveableObject {
    height = 280;
    width = 459;  //Faktor height*1,64
    health = 2;
    y = 120;
    speed = 8;
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
        this.startThrowTimer()
    }


    animate() {
        setInterval(() => {
            if (!this.isDead() && !this.startAttack && !this.startHit && this.x == this.attackStartpoint) {
                this.playAnimation(this.IMAGES_IDLE);
                this.stopMoving();
            } else if (!this.isDead() && this.startAttack && !this.startHit && this.x > this.attackEndpoint) {
                this.playAnimation(this.IMAGES_WALKING);
                this.moveLeft();
            } else if (!this.isDead() && this.startHit) {
                this.playAnimation(this.IMAGES_ATTACKING);
                this.stopMoving();
            } else if (!this.isDead() && !this.startHit && this.startThrow) {
                this.playAnimation(this.IMAGES_THROWING);
            } else if (!this.isDead() && !this.startHit) {
                this.playAnimation(this.IMAGES_IDLE);
            }
        }, 1000 / 15);

        setInterval(() => {
            if (this.isDead()) {
                //no damage to chracater
                this.stopMoving();
                this.playAnimation(this.IMAGES_DYING);
                setTimeout(() => {
                    this.stopAnimation(this.IMAGES_DYING);
                }, 150);
            } else if (!this.isDead() && this.isHurt()) {
                this.playAnimation(this.IMAGES_HURTING);
            }
        }, 1000 / 15);

        setInterval(() => {

        }, 3000);
    }

    startThrowTimer() {
        setInterval(() => {
            this.startThrow = true;
            setTimeout(() => {
                this.startThrow = false;
            }, 400);
        }, 3000);
    }
}
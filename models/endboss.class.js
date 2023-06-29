class Endboss extends MoveableObject {
    height = 280;
    width = 459;  //Faktor height*1,64
    y = 120;
    offsetHeight = 40;
    offsetWidth = 100;

    IMAGES_WALKING = [
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

    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.x = 5000;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 1000/15)
        this.moveLeft();
    }
}
class ThrowableObject extends MoveableObject {
    world;
    offsetY = 50;
    offsetX = 20;
    offsetHeight = 30;
    offsetWidth = 40;

    IMAGES_SPEARTHROWING = [
        './img/6_spear/spear_animation/spear0.png',
        './img/6_spear/spear_animation/spear05.png',
        './img/6_spear/spear_animation/spear1.png',
        './img/6_spear/spear_animation/spear15.png',
        './img/6_spear/spear_animation/spear2.png',
        './img/6_spear/spear_animation/spear25.png',
        './img/6_spear/spear_animation/spear3.png',
        './img/6_spear/spear_animation/spear35.png',
        './img/6_spear/spear_animation/spear4.png',
        './img/6_spear/spear_animation/spear45.png',
        './img/6_spear/spear_animation/spear5.png',
        './img/6_spear/spear_animation/spear55.png',
        './img/6_spear/spear_animation/spear6.png',
        './img/6_spear/spear_animation/spear65.png',
        './img/6_spear/spear_animation/spear7.png',
        './img/6_spear/spear_animation/spear75.png',
    ];

    constructor(x, y) {
        super().loadImage(this.IMAGES_SPEARTHROWING[0]);
        this.loadImages(this.IMAGES_SPEARTHROWING);
        this.x = x - this.offsetX;
        this.y = y - this.offsetY;
        this.height = 130;
        this.width = 130;
        this.throw();
    }

    throw() {
        this.speedY = 10;
        this.applyGravity();
        setInterval(() => {
            this.x += 25;
            this.playAnimation(this.IMAGES_SPEARTHROWING);
        }, 1000 / 30);
    }
}
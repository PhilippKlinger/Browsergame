class ThrowableObject extends MoveableObject {

    IMAGES_SPEARTHROWING = [
        './img/6_spear/spear_animation/spear0.svg',
        './img/6_spear/spear_animation/spear1.svg',
        './img/6_spear/spear_animation/spear2.svg',
        './img/6_spear/spear_animation/spear3.svg',
        './img/6_spear/spear_animation/spear4.svg',
        './img/6_spear/spear_animation/spear5.svg',
        './img/6_spear/spear_animation/spear6.svg',
        './img/6_spear/spear_animation/spear7.svg',
        './img/6_spear/spear_animation/spear8.svg',
        './img/6_spear/spear_animation/spear9.svg',
        './img/6_spear/spear_animation/spear10.svg'
    ];


    constructor(x, y) {
        super();
        this.loadImage('./img/6_spear/spear_animation/spear0.svg');
        this.x = x;
        this.y = y;
        this.height = 20;
        this.width = 100;
        this.throw();
    }


    throw() {
        this.speedY = 20;
        this.applyGravity();
        setInterval(() => {
            this.x += 15;
        }, 1000 / 30);
    }




}
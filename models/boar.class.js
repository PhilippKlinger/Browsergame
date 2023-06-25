class Boar extends MoveableObject {
    height = 100;
    width = 120;
  

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

    
    constructor() {
        super().loadImage('./img/3_enemies_boar/boar/Walking/Walking_000.png');
        this.loadImages(this.IMAGES_WALKING);
        this.y = 290 + Math.random() * 20;
        this.x = 500 + Math.random() * 400;
        this.speed = 0.8 + Math.random() * 0.5;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000/60);

        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 1000/30);

    }
}

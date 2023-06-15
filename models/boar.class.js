class Boar extends MoveableObject {
    height = 100;
    width = 120;
    y = 300;

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
        this.x = 500 + Math.random() * 400;
        this.speed = 0.8 + Math.random() * 0.5;
        this.animate();
    }

    draw(ctx) {
        ctx.save();
        ctx.scale(-1, 1); // Horizontale Spiegelung
        ctx.drawImage(this.img, -this.x - this.width, this.y, this.width, this.height);
        ctx.restore();
    }

    animate() {
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_WALKING.length;
            let path = this.IMAGES_WALKING[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 1000/30)

       this.moveLeft();
    }
}

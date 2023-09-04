class CoinDisplay extends MoveableObject {

    IMAGES_COIN = [
        './img/8_coin/Gold_21.png',
        './img/8_coin/Gold_22.png',
        './img/8_coin/Gold_23.png',
        './img/8_coin/Gold_24.png',
        './img/8_coin/Gold_25.png',
        './img/8_coin/Gold_26.png',
        './img/8_coin/Gold_27.png',
        './img/8_coin/Gold_28.png',
        './img/8_coin/Gold_29.png',
        './img/8_coin/Gold_30.png'
    ]
    
    constructor() {
        super().loadImage(this.IMAGES_COIN[0]);
        this.loadImages(this.IMAGES_COIN);
        this.x = 30;
        this.y = 90;
        this.width = 40;
        this.height = 40;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_COIN);
        }, 1000/10)
    }
}
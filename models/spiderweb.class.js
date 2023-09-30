class Spiderweb extends MoveableObject {
    world;
    offsetY = 50;
    offsetX = 20;
    offsetHeight = 0;
    offsetWidth = 0;
    speed = 10;

    IMAGE_SPIDERWEB = './img/4_enemie_boss_blackwidow/web_projectile.png';

    constructor() {
        super().loadImage(this.IMAGE_SPIDERWEB);
        this.x = 4500//x - this.offsetX;
        this.y = 270//y - this.offsetY;
        this.height = 120;
        this.width = 170;
        this.squirt();
    }

    squirt() {
        setInterval(() => {
           this.moveLeft();
        }, 1000 / 30);
    }
    
}
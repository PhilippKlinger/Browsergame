class Character extends MoveableObject {
    height = 200;
    width = 180;
    y = 230;
    x = 50;
    world;
    speed = 8;

    IMAGES_RUNNING = [
        './img/2_character_maya/Running/Running_000.png',
        './img/2_character_maya/Running/Running_001.png',
        './img/2_character_maya/Running/Running_002.png',
        './img/2_character_maya/Running/Running_003.png',
        './img/2_character_maya/Running/Running_004.png',
        './img/2_character_maya/Running/Running_005.png',
        './img/2_character_maya/Running/Running_006.png',
        './img/2_character_maya/Running/Running_007.png',
        './img/2_character_maya/Running/Running_008.png',
        './img/2_character_maya/Running/Running_009.png',
        './img/2_character_maya/Running/Running_010.png',
        './img/2_character_maya/Running/Running_011.png'
    ];

    constructor() {
        super().loadImage('./img/2_character_maya/Running/Running_000.png');
        this.loadImages(this.IMAGES_RUNNING);
        this.animate();
    }

    draw(ctx) {
        if (this.otherDirection) {
            ctx.save();
            ctx.scale(-1, 1);
            ctx.translate(-this.width, 0);
            this.x = this.x * -1;
        }
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        if (this.otherDirection) {
            ctx.restore();
            this.x = this.x * -1;
        }
    }

    animate() {
        setInterval(() => {
            if(this.world.keyboard.ARROWRIGHT) {
            this.x += this.speed;
            this.world.character.otherDirection = false;
            let i = this.currentImage % this.IMAGES_RUNNING.length;
            let path = this.IMAGES_RUNNING[i];
            this.img = this.imageCache[path];
            this.currentImage++;
            }
        }, 1000 / 25);

        setInterval(() => {
            if(this.world.keyboard.ARROWLEFT) {
            this.x -= this.speed;
            this.world.character.otherDirection = true;
            let i = this.currentImage % this.IMAGES_RUNNING.length;
            let path = this.IMAGES_RUNNING[i];
            this.img = this.imageCache[path];
            this.currentImage++;
            }
        }, 1000 / 25);
    }

}
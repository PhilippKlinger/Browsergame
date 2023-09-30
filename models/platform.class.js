class Platform extends DrawableObject {

    offsetY = 0;
    offsetX = 0;
    offsetHeight = 0;
    offsetWidth = 0;

    IMAGE_PLATFORM = './img/12_obstacle/platform.png';

    constructor(x, y) {
        super().loadImage(this.IMAGE_PLATFORM);
        this.height = 90;
        this.width = 170;
        this.x = x;
        this.y = y
    }
}
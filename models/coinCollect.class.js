class CoinCollect extends DrawableObject {

    width = 40;
    height = 40;
   
    offsetHeight = 0;
    offsetWidth = 0;

    constructor(imagePath, x, y) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = y
    }
}
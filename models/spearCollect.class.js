class SpearCollect extends DrawableObject {

    width = 130;
    height = 130;
    y = 290;
    offsetHeight = 40;
    offsetWidth = 90;

    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;
    }
}
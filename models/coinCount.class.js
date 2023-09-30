class CoinCount extends DrawableObject {

    IMAGES_COUNT = [
        './img/10_gui/numbers/0.png',
        './img/10_gui/numbers/1.png',
        './img/10_gui/numbers/2.png',
        './img/10_gui/numbers/3.png',
        './img/10_gui/numbers/4.png',
        './img/10_gui/numbers/5.png',
        './img/10_gui/numbers/6.png',
        './img/10_gui/numbers/7.png',
        './img/10_gui/numbers/8.png',
        './img/10_gui/numbers/9.png'
    ]

    constructor() {
        super();
        this.loadImage(this.IMAGES_COUNT[0]);
        this.loadImages(this.IMAGES_COUNT);
        this.x = 100;
        this.y = 90;
        this.width = 30;
        this.height = 35;
        this.updateCount();
    }

    /**
    * Updates the count and sets the corresponding image based on the count.
    *
    * @param {number} count - The new count value to be set.
    */
    updateCount(count) {
        this.count = count;
        let path = this.IMAGES_COUNT[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    /**
    * Resolves the image index based on the current count. This is used to
    * determine which image from IMAGES_COUNT should be displayed.
    *
    * @returns {number} - The index corresponding to the count value.
    */
    resolveImageIndex() {
        if (this.count == 9) {
            return 9;
        } else if (this.count == 8) {
            return 8;
        } else if (this.count == 7) {
            return 7;
        } else if (this.count == 6) {
            return 6;
        } else if (this.count == 5) {
            return 5;
        } else if (this.count == 4) {
            return 4;
        } else if (this.count == 3) {
            return 3;
        } else if (this.count == 2) {
            return 2;
        } else if (this.count == 1) {
            return 1;
        } else {
            return 0;
        }
    }

}
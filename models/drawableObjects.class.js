class DrawableObject {
    currentImage = 0;
    img;
    imageCache = {};


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    draw(ctx) {
        this.drawBoundingBox(ctx);
        if (this.otherDirection) {
            this.flipImage(ctx);
        }
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        if (this.otherDirection) {
            this.reflipImage(ctx);
        }
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }


}
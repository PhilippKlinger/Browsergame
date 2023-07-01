class DrawableObject {
    world;
    currentImage = 0;
    img;
    imageCache = {};
    intervals = [];


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
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

    drawBoundingBox(ctx) {
        if (this instanceof Character || this instanceof Boar || this instanceof Endboss) {
            ctx.beginPath();
            ctx.rect(this.x + (this.offsetWidth / 2.2), this.y + (this.offsetHeight / 3), this.width - this.offsetWidth, this.height - this.offsetHeight);
            ctx.lineWidth = '3';
            ctx.strokeStyle = 'red';
            ctx.stroke();
            ctx.closePath();
        }
    }
}
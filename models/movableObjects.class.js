class MoveableObject {
    currentImage = 0;
    img;
    imageCache = {};
    speed = 1;
    otherDirection = false;


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    moveRight() {
        setInterval(() => {
            this.x += this.speed;
        }, 1000/60);
    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000/60);
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }
} 
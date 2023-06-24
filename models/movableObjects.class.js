class MoveableObject {
    currentImage = 0;
    img;
    imageCache = {};
    speed = 1;
    otherDirection = false;
    speedY = 0;
    acceleration = 1.5;
   

    applyGravity() {
        setInterval(() => {
            if(this.isAboveGround()) {
            this.y -= this.speedY;
            this.speedY -= this.acceleration;
            }
        }, 1000/30);
    }

    isAboveGround() {
        return this.y < 220;
    }

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    moveRight() {
        setInterval(() => {
            this.x += this.speed;
        }, 1000 / 60);
    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }

    flipImage(ctx) {
        ctx.save();
        ctx.scale(-1, 1);
        ctx.translate(-this.width, 0);
        this.x = this.x * -1;
    }

    reflipImage(ctx) {
        ctx.restore();
        this.x = this.x * -1;
    }

    draw(ctx) {
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

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }
} 
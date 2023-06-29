class MoveableObject extends DrawableObject {
    speedY = 0;
    acceleration = 1.5;
    speed = 1;
    otherDirection = false;
    health = 100;
    lastHit = 0;

    isColliding(obj) {
        return (
            (this.x + this.offsetWidth / 2.2) + (this.width - this.offsetWidth) >= (obj.x + obj.offsetWidth / 2.2) &&
            (this.x + this.offsetWidth / 2.2) <= (obj.x + obj.offsetWidth / 2.2) + (obj.width - obj.offsetWidth) &&
            (this.y + this.offsetHeight / 3) + (this.height - this.offsetHeight) >= obj.y &&
            (this.height - this.offsetHeight) <= obj.y + obj.height
        );
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

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 30);
    }

    isAboveGround() {
        if (this instanceof ThrowableObject) {
          return true;
        } else if (this.x >= 1830 && this.x <= 1990 && this.y > 220) {
          return this.y < 500;
        } else {
          return this.y < 220;
        }
      }

    moveRight() {
        this.x += this.speed;
        this.otherDirection = false;
    }

    moveLeft() {
        this.x -= this.speed;
        this.otherDirection = true;
    }

    jump() {
        this.speedY = 20;
    }

    slideRight() {
        this.x += (this.speed)*1.5;
    }

    slideLeft() {
        this.x -= (this.speed)*1.5;
    }

    hit() {
        this.health -= 1;
        if (this.health < 0) {
            this.health = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit;
        timePassed = timePassed / 1000;
        return timePassed < 0.3;
    }

    isDead() {
        return this.health == 0;
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    stopAnimation(images) {
        let lastFrameIndex = images.length - 1;
        this.currentImage = lastFrameIndex;
        let lastFramePath = images[lastFrameIndex];
        this.img = this.imageCache[lastFramePath];
    }

} 
class MoveableObject extends DrawableObject {
    speedY = 0;
    acceleration = 1.5;
    speed = 1;
    otherDirection = false;
    health = 100;
    lastHit = 0;
    maxSlideDistance = 250;
    slideDistance = 0;
    newX;

    // Überprüft, ob dieses DrawableObject mit einem anderen Objekt (übergeben als 'obj') kollidiert.
    isColliding(obj) {
        return (
            // Überprüft, ob die rechte Seite dieses Characters größer oder gleich der linken Seite des 'obj' ist.
            (this.x + this.offsetWidth / 2.2) + (this.width - this.offsetWidth) >= (obj.x + obj.offsetWidth / 2.2) &&
            // Überprüft, ob die linke Seite dieses Characters kleiner oder gleich der rechten Seite des 'obj' ist.
            (this.x + this.offsetWidth / 2.2) <= (obj.x + obj.offsetWidth / 2.2) + (obj.width - obj.offsetWidth) &&
            // Überprüft, ob die untere Seite dieses Characters größer oder gleich der oberen Seite des 'obj' ist.
            (this.y + this.offsetHeight / 3) + (this.height - this.offsetHeight) >= (obj.y + obj.offsetHeight) &&
            // Überprüft, ob die obere Seite dieses Characters kleiner oder gleich der unteren Seite des 'obj' ist.
            (this.y + this.offsetHeight) <= (obj.y + obj.offsetHeight) + (obj.height - obj.offsetHeight)
        );
    }

    isInFrontOf(obj) {
        return (
            (this.x + this.offsetWidth) + (this.width - this.offsetWidth) >= (obj.x + obj.offsetWidth / 2.2)
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
        } else if (this.x >= 1850 && this.x <= 1970 && this.y > 220) {
            return [this.y < 500, this.health = 0, this.statusbar.setPercentage(this.health)];
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

    stopMoving() {
        this.x += 0;
    }

    jump() {
        this.speedY = 20;
    }

    bounce() {
        this.speedY = 15;
    }

    slide() {
        if (!this.otherDirection) {
            this.newX = this.x + this.maxSlideDistance;
            if (this.newX <= (5000 - this.width) && this.slideDistance < this.maxSlideDistance) {
                this.x += this.speed;
                this.slideDistance += this.speed; // Erhöhe die slidedistanz
            } 
        } else {
            this.newX = this.x - this.maxSlideDistance;
            if (this.newX <= (5000 - this.width) && this.slideDistance < this.maxSlideDistance) {
                this.x -= this.speed;
                this.slideDistance += this.speed; // Erhöhe die slidedistanz
            } 
        }
    }

    resetSlideDistance() {
        this.slideDistance = 0; // Setze die slidedistanz zurück
    }

    hit() {
        this.health -= 10;
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
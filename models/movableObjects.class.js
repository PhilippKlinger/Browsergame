class MoveableObject extends DrawableObject {
    speedY = 0;
    acceleration = 1.5;
    speed = 1;
    otherDirection = false;
    isBouncingBack = false;
    isSliding = false;
    health = 100;
    lastHit = 0;
    maxSlideDistance = 350;
    slideDistance = 0;
    newX;

    /**
     * Checks if the current object is colliding with another object.
     * @param {MoveableObject} obj - The other object.
     * @returns {boolean} Returns whether a collision is occurring.
     */
    isColliding(obj) {
        return (
            // Checks if the right side of this character is greater than or equal to the left side of 'obj'.
            (this.x + this.offsetWidth / 2.2) + (this.width - this.offsetWidth) >= (obj.x + obj.offsetWidth / 2.2) &&
            // Checks if the left side of this character is less than or equal to the right side of 'obj'.
            (this.x + this.offsetWidth / 2.2) <= (obj.x + obj.offsetWidth / 2.2) + (obj.width - obj.offsetWidth) &&
            // Checks if the bottom side of this character is greater than or equal to the top side of 'obj'.
            (this.y + this.offsetHeight / 3) + (this.height - this.offsetHeight) >= (obj.y + obj.offsetHeight) &&
            // Checks if the top side of this character is less than or equal to the bottom side of 'obj'.
            (this.y + this.offsetHeight) <= (obj.y + obj.offsetHeight) + (obj.height - obj.offsetHeight)
        );
    }

    /**
     * Checks if the current object is in front of another object.
     * @param {MoveableObject} obj - The other object.
     * @returns {boolean} Returns whether the current object is in front.
     */
    isInFrontOf(obj) {
        return (
            (this.x + this.offsetWidth) + (this.width - this.offsetWidth) >= (obj.x + obj.offsetWidth / 2.2)
        );
    }

    /**
     * Flips the image of the object (mirror effect).
     * @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
     */
    flipImage(ctx) {
        ctx.save();
        ctx.scale(-1, 1);
        ctx.translate(-this.width, 0);
        this.x = this.x * -1;
    }

    /**
     * Restores the original orientation of the image after it has been flipped.
     * @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
     */
    reflipImage(ctx) {
        ctx.restore();
        this.x = this.x * -1;
    }

    /**
     * Applies gravity to the object to simulate falling.
     */
    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 30);
    }

    /**
     * Checks if the object is above the ground.
     * @returns {boolean} Returns whether the object is above the ground.
     */
    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        } else if (this.x >= 1850 && this.x <= 1970 && this.y > 220) {
            return [this.y < 500, this.health = 0, this.statusbar.setPercentage(this.health)];
        } else {
            return this.y < 220;
        }
    }

    /**
     * Moves the object to the right.
     */
    moveRight() {
        if (!this.isSliding) {
            this.x += this.speed;
            this.otherDirection = false;
        }
    }

    /**
     * Moves the object to the left.
     */
    moveLeft() {
        if (!this.isSliding) {
            this.x -= this.speed;
            this.otherDirection = true;
        }
    }

    /**
     * Stops the object's movement.
     */
    stopMoving() {
        this.x += 0;
    }

    /**
     * Simulates the object's jump.
     */
    jump() {
        this.speedY = 18;
    }

    /**
     * Simulates the object bouncing.
     */
    bounce() {
        this.speedY = 15;
    }

     /**
     * Bounces the object back by a given distance.
     * @param {number} distance - The distance to bounce back.
     */
    bounceBack(distance) {
        this.isBouncingBack = true;
        this.speedY = 7;
        const fallBackSpeed = 25;
        const totalDistance = distance;
        let distanceFallenBack = 0;
        const fallBackInterval = setInterval(() => {
            this.x -= fallBackSpeed;
            distanceFallenBack += fallBackSpeed;
            if (distanceFallenBack >= totalDistance) {
                clearInterval(fallBackInterval);
                this.isBouncingBack = false;
            }
        }, 1000 / 30);
    }

    /**
     * Slides the object (either left or right).
     */
    slide() {
        this.isSliding = true;
        if (!this.otherDirection) {
            this.slideRight();
        } else {
            this.newX = this.x - this.maxSlideDistance;
            if (this.allowSlidingLeft()) {
                this.slideLeft();
            }
        }
    }

    /**
     * Slides the object to the right.
     */
    slideRight() {
        this.newX = this.x + this.maxSlideDistance;
        if (this.newX <= (5000 - this.width) && this.slideDistance < this.maxSlideDistance) {
            this.x += this.speed;
            this.slideDistance += this.speed;
        }
    }

    /**
     * Checks if sliding to the left is allowed.
     * @returns {boolean} Returns whether the object can slide left.
     */
    allowSlidingLeft() {
        return this.newX <= (5000 - this.width) && this.slideDistance < this.maxSlideDistance && this.x > 100;
    }

    /**
     * Slides the object to the left.
     */
    slideLeft() {
        this.x -= this.speed;
        this.slideDistance += this.speed;
    }

    /**
     * Resets the sliding distance of the object.
     */
    resetSlideDistance() {
        this.slideDistance = 0;
        this.isSliding = false;
    }

    /**
     * Reduces the object's health by a given damage value.
     * @param {number} damage - The damage to be applied to the object.
     */
    hit(damage) {
        this.health -= damage;
        if (this.health < 0) {
            this.health = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    /**
     * Checks if the object was recently hit.
     * @returns {boolean} Returns whether the object was recently hit.
     */
    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit;
        timePassed = timePassed / 1000;
        return timePassed < 0.3;
    }

    /**
     * Checks if the object is dead.
     * @returns {boolean} Returns whether the object's health is zero.
     */
    isDead() {
        return this.health == 0;
    }

    /**
     * Plays an animation sequence based on the given images.
     * @param {Array} images - The list of images for the animation sequence.
     */
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

     /**
     * Stops the animation at the last frame.
     * @param {Array} images - The list of images for the animation sequence.
     */
    stopAnimation(images) {
        let lastFrameIndex = images.length - 1;
        this.currentImage = lastFrameIndex;
        let lastFramePath = images[lastFrameIndex];
        this.img = this.imageCache[lastFramePath];
    }
} 
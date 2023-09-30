class DrawableObject {
    world;
    currentImage = 0;
    img;
    imageCache = {};

    /**
     * Loads an image for the game object.
     *
     * @param {string} path - The path to the image to be loaded.
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /**
     * Loads multiple images and caches them for later use.
     *
     * @param {string[]} arr - An array of image paths to be loaded.
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    /**
    * Draws the game object on the canvas context provided.
    *
    * @param {CanvasRenderingContext2D} ctx - The canvas rendering context on which the game object should be drawn.
    */
    draw(ctx) {
        // this.drawBoundingBox(ctx);
        if (this.otherDirection) {
            this.flipImage(ctx);
        }
        try {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        } catch (error) {
            console.warn('Error loading Image', error);
            console.log('Could not load image,', this.img.src);
        }
        if (this.otherDirection) {
            this.reflipImage(ctx);
        }
    }

    // drawBoundingBox(ctx) {
    //     if (this instanceof Character || this instanceof Boar || this instanceof Endboss || this instanceof ThrowableObject 
    //         || this instanceof SpearCollect || this instanceof CoinCollect || this instanceof Spiderweb || this instanceof Obstacle
    //         || this instanceof Platform) {
    //         ctx.beginPath();
    //         ctx.rect(this.x + (this.offsetWidth / 2.2), this.y + (this.offsetHeight / 3), this.width - this.offsetWidth, this.height - this.offsetHeight);
    //         ctx.lineWidth = '3';
    //         ctx.strokeStyle = 'red';
    //         ctx.stroke();
    //         ctx.closePath();
    //     }
    // }
} 
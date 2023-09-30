class CoinCollect extends DrawableObject {
    width = 40;
    height = 40;
    originalWidth = this.width;
    originalHeight = this.height;
    offsetHeight = 0;
    offsetWidth = 0;

    constructor(imagePath, x, y) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = y;
        this.animate();
    }

    /**
    * Initiates the coin animation loop with a given duration and ensures continuity.
    */
    animate() {
        const animationDuration = 1300;
        const startTime = Date.now();
        /**
     * Defines each step of the animation loop. It plays the coin animation,
     * updates the coin's dimensions based on the elapsed time, and uses
     * requestAnimationFrame for smooth animations.
     */
        const animateStep = () => {
            const currentTime = Date.now();
            const elapsedTime = currentTime - startTime;
            if (elapsedTime < animationDuration) {
                this.playCoinAnimation(animationDuration, elapsedTime);
                requestAnimationFrame(animateStep);
            } else {
                this.width = this.originalWidth;
                this.height = this.originalHeight;
                this.animate();
            }
        };
        requestAnimationFrame(animateStep);
    }

    /**
    * Plays the coin animation based on the elapsed time, adjusting the coin's
    * dimensions using a sinusoidal function to create a pulsating effect.
    * 
    * @param {number} animationDuration - Total duration of the animation in milliseconds.
    * @param {number} elapsedTime - Amount of time elapsed since the start of the animation.
    */
    playCoinAnimation(animationDuration, elapsedTime) {
        const progress = elapsedTime / animationDuration;
        const scale = 1 + (Math.sin(progress * Math.PI * 2) * 0.125);
        this.width = this.originalWidth * scale;
        this.height = this.originalHeight * scale;
    }

}


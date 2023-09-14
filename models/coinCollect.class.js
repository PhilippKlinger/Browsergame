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

    animate() {
        const animationDuration = 1300;
        const startTime = Date.now();
        const animateStep = () => {
            const currentTime = Date.now();
            const elapsedTime = currentTime - startTime;
            if (elapsedTime < animationDuration) {
                const progress = elapsedTime / animationDuration;
                const scale = 1 + (Math.sin(progress * Math.PI * 2) * 0.125);
                this.width = this.originalWidth * scale;
                this.height = this.originalHeight * scale;
                requestAnimationFrame(animateStep);
            } else {
                this.width = this.originalWidth;
                this.height = this.originalHeight;
                this.animate();
            }
        };
        requestAnimationFrame(animateStep);
    }

}


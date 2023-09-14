class Obstacle extends MoveableObject {

    offsetY = 0;
    offsetX = 0;
    offsetHeight = 0;
    offsetWidth = 0;
    activatedSpikes = false;
    allowProcess = false;

    IMAGES_SPIKE_UP = [
        './img/12_obstacle/long_wood_spike_01.png',
        './img/12_obstacle/long_wood_spike_02.png',
        './img/12_obstacle/long_wood_spike_03.png',
        './img/12_obstacle/long_wood_spike_04.png',
        './img/12_obstacle/long_wood_spike_05.png'
    ];

    IMAGES_SPIKE_DOWN = [
        './img/12_obstacle/long_wood_spike_05.png',
        './img/12_obstacle/long_wood_spike_04.png',
        './img/12_obstacle/long_wood_spike_03.png',
        './img/12_obstacle/long_wood_spike_02.png',
        './img/12_obstacle/long_wood_spike_01.png'
    ];

    constructor(x, y) {
        super().loadImage(this.IMAGES_SPIKE_UP[0]);
        this.loadImages(this.IMAGES_SPIKE_UP);
        this.loadImages(this.IMAGES_SPIKE_DOWN);
        this.animate();
        this.height = 120;
        this.width = 35;
        this.x = x - 1400;
        this.y = y
    }

    animate() {

        let i = 0;

        setInterval(() => {
            if (!this.activatedSpikes && this.allowProcess && world.character.x > 350) { 
                this.activatedSpikes = true;
            } else if (this.activatedSpikes && i < 4) {
                this.playAnimation(this.IMAGES_SPIKE_UP);
                i++;
            } else if (this.activatedSpikes) {
                this.stopAnimation(this.IMAGES_SPIKE_UP);
                this.activatedSpikes = false;
            }
        }, 1000 / 15);


        setTimeout(() => {
            this.allowProcess = true;
        }, 2000);


    }


}
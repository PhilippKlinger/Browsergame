class Obstacle extends MoveableObject {

    offsetY = 0;
    offsetX = 0;
    offsetHeight = 0;
    offsetWidth = 0;
    allowProcess = false;
    activateSpikes = false;
    spikeIsUp = false;

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
    ]

    constructor(x, y) {
        super().loadImage(this.IMAGES_SPIKE_UP[0]);
        this.loadImages(this.IMAGES_SPIKE_UP);
        this.loadImages(this.IMAGES_SPIKE_DOWN);
        this.animate();
        this.height = 120;
        this.width = 35;
        this.x = x;
        this.y = y
    }

    animate() {

        let i = 0;

        setInterval(() => {
            if (this.allowProcess && this.activateSpikes && i < 5 && !this.spikeIsUp) {
                this.playAnimation(this.IMAGES_SPIKE_UP);
                i++;
            } else if (i == 5 && !this.spikeIsUp) {
                setTimeout(() => {
                    this.spikeIsUp = true;
                }, 1500);
            } else if (this.spikeIsUp && i !== 0) {
                this.playAnimation(this.IMAGES_SPIKE_DOWN);
                i--;
            } else if (i == 0 && this.spikeIsUp) {
                setTimeout(() => {
                    this.spikeIsUp = false;
                }, 1500);
            }
        }, 1000 / 30);

        setTimeout(() => {
            this.allowProcess = true;
        }, 1000);

    }


}
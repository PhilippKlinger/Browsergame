class Obstacle extends MoveableObject {

    world;
    offsetY = 0;
    offsetX = 0;
    offsetHeight = 0;
    offsetWidth = 0;

    IMAGES_SPIKE = [
        './img/12_obstacle/long_wood_spike_01.png',
        './img/12_obstacle/long_wood_spike_02.png',
        './img/12_obstacle/long_wood_spike_03.png',
        './img/12_obstacle/long_wood_spike_04.png',
        './img/12_obstacle/long_wood_spike_05.png'
    ];

    constructor(x, y) {
        super().loadImage(this.IMAGES_SPIKE[0]);
        this.loadImages(this.IMAGES_SPIKE);
        this.animate();
        this.height = 120;
        this.width = 30;
        this.x = x;
        this.y = y
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_SPIKE);
        }, 1000/8);
    }


}
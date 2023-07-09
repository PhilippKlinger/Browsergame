class Boar extends MoveableObject {
    height = 100;
    width = 120;
    y = 300;
    offsetHeight = 0;
    offsetWidth = 15;


    IMAGES_WALKING = [
        './img/3_enemies_boar/boar/Walking/Walking_000.png',
        './img/3_enemies_boar/boar/Walking/Walking_001.png',
        './img/3_enemies_boar/boar/Walking/Walking_002.png',
        './img/3_enemies_boar/boar/Walking/Walking_003.png',
        './img/3_enemies_boar/boar/Walking/Walking_004.png',
        './img/3_enemies_boar/boar/Walking/Walking_005.png',
        './img/3_enemies_boar/boar/Walking/Walking_006.png',
        './img/3_enemies_boar/boar/Walking/Walking_007.png',
        './img/3_enemies_boar/boar/Walking/Walking_008.png',
        './img/3_enemies_boar/boar/Walking/Walking_009.png',
        './img/3_enemies_boar/boar/Walking/Walking_010.png',
        './img/3_enemies_boar/boar/Walking/Walking_011.png',
        './img/3_enemies_boar/boar/Walking/Walking_012.png',
        './img/3_enemies_boar/boar/Walking/Walking_013.png',
        './img/3_enemies_boar/boar/Walking/Walking_014.png',
        './img/3_enemies_boar/boar/Walking/Walking_015.png',
        './img/3_enemies_boar/boar/Walking/Walking_016.png',
        './img/3_enemies_boar/boar/Walking/Walking_017.png'
    ];


    constructor(intervals) {
        super(intervals).loadImage('./img/3_enemies_boar/boar/Walking/Walking_000.png');
        this.loadImages(this.IMAGES_WALKING);
        this.x = 5500 + Math.random() * 1000;
        this.speed = 1.4 + Math.random() * 1;
        this.health = 10;
        this.animate();
        //this.stopInterval();
    }

    animate() {
        this.intervals.push(setInterval(() => {
            this.moveLeft();
            this.playAnimation(this.IMAGES_WALKING);
        }, 1000 / 30));
        console.log(this.intervals);
    }

    /**
     * stopInterval() {
        if (this.world.keyboard.A) {
            intervals.forEach(interval => clearInterval(interval));
        }
    }
     */
    
}


// Intervalle stoppen
//

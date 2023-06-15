class Bird extends MoveableObject {
    height = 50;
    width = 60;
    y = 80;
   

    IMAGES_FLYING = [
        './img/1_editables/Flying Monster - 01/Idle_000.png',
        './img/1_editables/Flying Monster - 01/Idle_001.png',
        './img/1_editables/Flying Monster - 01/Idle_002.png',
        './img/1_editables/Flying Monster - 01/Idle_003.png',
        './img/1_editables/Flying Monster - 01/Idle_004.png',
        './img/1_editables/Flying Monster - 01/Idle_005.png',
        './img/1_editables/Flying Monster - 01/Idle_006.png',
        './img/1_editables/Flying Monster - 01/Idle_007.png',
        './img/1_editables/Flying Monster - 01/Idle_008.png',
        './img/1_editables/Flying Monster - 01/Idle_009.png',
        './img/1_editables/Flying Monster - 01/Idle_010.png',
        './img/1_editables/Flying Monster - 01/Idle_011.png',
        './img/1_editables/Flying Monster - 01/Idle_012.png',
        './img/1_editables/Flying Monster - 01/Idle_013.png',
        './img/1_editables/Flying Monster - 01/Idle_014.png',
        './img/1_editables/Flying Monster - 01/Idle_015.png',
        './img/1_editables/Flying Monster - 01/Idle_016.png',
        './img/1_editables/Flying Monster - 01/Idle_017.png'        
    ];

    constructor() {
        super().loadImage('./img/1_editables/Flying Monster - 01/Idle_000.png');
        this.loadImages(this.IMAGES_FLYING);
        this.x = -800 + Math.random() * 600;
        this.speed = 1.5 + Math.random() * 0.8;
        this.animate();
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    animate() {
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_FLYING.length;
            let path = this.IMAGES_FLYING[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 1000/30);
        
        this.moveRight();
       
    }

    
}
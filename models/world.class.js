class World {


    character = new Character();
    enemies = [
        new Boar(),
        new Boar(),
        new Boar()
    ];
    birds = [
        new Bird(),
        new Bird(),
        new Bird(),
        new Bird(),
        new Bird(),
    ];
    backgroundObjects = [
        new BackgroundObject('./img/5_background/02/layers/l1_background.png'),
        new BackgroundObject('./img/5_background/02/layers/l2_trees01.png'),
        new BackgroundObject('./img/5_background/02/layers/l3_trees02.png'),
        new BackgroundObject('./img/5_background/02/layers/l4_grass01.png'),
        new BackgroundObject('./img/5_background/02/layers/l5_grass02.png'),
        new BackgroundObject('./img/5_background/02/layers/l6_fog.png'),
        new BackgroundObject('./img/5_background/02/layers/l7_ground.png'),
        new BackgroundObject('./img/5_background/02/layers/l8_foreground.png')
    ]
    canvas;
    ctx;
    keyboard;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }

    setWorld() {
        this.character.world = this;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); //canvas wird geleert bevor objects neu angezeigt werden.

        this.addObjectsToMap(this.backgroundObjects);
        this.addObjectsToMap(this.enemies);
        this.addObjectsToMap(this.birds);
        this.character.draw(this.ctx);

        let self = this;
        requestAnimationFrame(function () { //somit wird draw() funktion immer wieder neu ausgeführt
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            o.draw(this.ctx);
        })
    }

    addToMap(mo) {
        mo.draw(this.ctx);
    }
}
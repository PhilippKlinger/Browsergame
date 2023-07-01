class World {
    drawableObject = new DrawableObject();
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    cameraX = 0;
    statusbar = new Statusbar();


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
        this.character.statusbar = this.statusbar;
    }

    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowing();
            this.checkDying();
        }, 1000 / 10);
    }

    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusbar.setPercentage(this.character.health);
            };
            if (enemy.isColliding(this.character) && this.keyboard.ARROWUP) {
                clearInterval(1);
            };
        });
    }

    checkThrowing() {
        if (this.keyboard.D && !this.character.otherDirection) {
            let spear = new ThrowableObject(this.character.x + 120, this.character.y + 80);
            this.level.throwableObjects.push(spear);
        }
    }

    checkDying() {
        if (this.character.isDead()) {
            this.keyboard.isLocked = true;
        }
    }

    setWorld() {
        this.character.world = this;
        this.drawableObject.world = this;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); //canvas wird geleert bevor objects neu angezeigt werden.

        this.ctx.translate(this.cameraX, 0);
        this.addObjectsToMap(this.level.backgroundObjects);

        this.ctx.translate(-this.cameraX, 0);
        this.statusbar.draw(this.ctx);
        this.ctx.translate(this.cameraX, 0);

        this.character.draw(this.ctx);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.birds);
        this.addObjectsToMap(this.level.throwableObjects);

        this.ctx.translate(-this.cameraX, 0);

        let self = this;
        requestAnimationFrame(function () { //somit wird draw() funktion immer wieder neu ausgeführt
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            o.draw(this.ctx);
        });
    }

    addToMap(mo) {
        mo.draw(this.ctx);
    }
    
}
class World {
    drawableObject = new DrawableObject();
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    cameraX = 0;
    collectedSpears = 3;
    collectedCoins = 0;
    lastThrowTime = null;
    statusbar = new Statusbar();
    spearCount = new SpearCount();
    spearDisplay = new SpearDisplay();
    coinDisplay = new CoinDisplay();
    coinCount = new CoinCount();


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
            this.checkCoinCollect();
            this.checkCount();
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
        for (let i = 0; i < this.level.spearCollect.length; i++) {
            let spear = this.level.spearCollect[i];
            if (this.character.isColliding(spear)) {
                this.collectedSpears++;
                this.level.spearCollect.splice(i, 1);
                i--; 
            }
        }
        for (let i = 0; i < this.level.coinCollect.length; i++) {
            let coin = this.level.coinCollect[i];
            if (this.character.isColliding(coin)) {
                this.collectedCoins++;
                this.level.coinCollect.splice(i, 1);
                i--;
            }
        }
    }

    checkThrowing() {
        
        if (this.keyboard.D && this.canThrow()) {
            let spear = new ThrowableObject(this.character.x + 120, this.character.y + 80);
            this.collectedSpears--;
            this.level.throwableObjects.push(spear);
            this.lastThrowTime = Date.now();
        }
    }

    checkCoinCollect() {
       
    }

    checkSpearCollect() {

    }

    checkCount() {
        this.spearCount.updateSpearCount(this.collectedSpears);
        this.coinCount.updateCount(this.collectedCoins);
    }

    canThrow() {
        const minThrowInterval = 1000; // Mindestzeit zwischen zwei Würfen in Millisekunden
        const currentTime = Date.now();
        if (!this.lastThrowTime || currentTime - this.lastThrowTime >= minThrowInterval
            && this.collectedSpears > 0 && !this.keyboard.ARROWRIGHT && !this.character.otherDirection) {
            return true;
        }
        return false;
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
        this.addObjectsToMap(this.level.spearCollect);
        this.addObjectsToMap(this.level.coinCollect);

        this.ctx.translate(-this.cameraX, 0);
        this.statusbar.draw(this.ctx);
        this.spearCount.draw(this.ctx);
        this.spearDisplay.draw(this.ctx);
        this.coinDisplay.draw(this.ctx);
        this.coinCount.draw(this.ctx);
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
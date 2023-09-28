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
    amountOfSpiderwebs = 10;
    lastThrowTime = null;
    statusbar = new Statusbar();
    spearCount = new SpearCount();
    spearDisplay = new SpearDisplay();
    coinDisplay = new CoinDisplay();
    coinCount = new CoinCount();
    coincollectSound = new Audio('./audio/collectcoin.mp3');
    spearcollectSound = new Audio('./audio/collectspear.mp3');
    
    gameStarted = false;
    gamePaused = true;
    gameFinished = false;
    treasureCollected = false;
    playerWins = false;

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
            this.checkAttackToBoar();
            this.checkThrowing();
            this.checkGameIsOver();
            this.checkCoinCollect();
            this.checkSpearCollect();
            this.checkCount();
            this.checkDistanceToEnemies();
            this.checkDistanceToObstacles();
            this.checkDistanceToEndboss();
            this.checkSpiderweb();
        }, 1000 / 10);
    }

    checkCollisions() {
        this.checkCollisionsBoar();
        this.checkCollisionsEndboss();
        this.checkCollisionsSpearToBoar();
        this.checkCollisionsSpearToEndboss();
        this.checkCollisionsSpiderweb();
        this.checkCollisionsToObstacle();
        this.checkCollisionsToPlatform();
    }

    checkAttackToBoar() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isJumpingOnBoar(enemy)) {
                this.character.bounce();
                enemy.hit();
                if (enemy.isDead()) {
                    this.boarDies(enemy);
                }
            }
            if ((this.character.isInFrontOf(enemy) && this.keyboard.ARROWUP)) {
                enemy.hit();
                if (enemy.isDead()) {
                    this.boarDies(enemy);
                }
            }
        });
    }

    checkCollisionsToObstacle() {
        this.level.obstacles.forEach((obstacle) => {
            if(this.character.isColliding(obstacle) && !obstacle.spikeIsUp) {
                this.character.hit();
                this.statusbar.setPercentage(this.character.health);
                this.character.bounceBack();
            }
        });
    }

    checkCollisionsToPlatform() {
        this.level.platforms.forEach((platform) => {
            if(this.character.isColliding(platform) && !this.keyboard.S) {
               this.character.bounceBack()
            }
        });
    }

    checkCollisionsBoar() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && !this.character.isAboveGround() && !enemy.isDead()) {
                this.character.hit();
                this.statusbar.setPercentage(this.character.health);
            }
        });
    }

    checkCollisionsEndboss() {
        this.level.endboss.forEach((endboss) => {
            if (this.character.isColliding(endboss)) {
                this.character.hit();
                this.statusbar.setPercentage(this.character.health);
            };
        });
    }

    checkCollisionsSpiderweb() {
        this.level.spiderwebs.forEach((spiderweb) => {
            if (this.character.isColliding(spiderweb)) {
                this.character.hit();
                this.statusbar.setPercentage(this.character.health);
                this.level.spiderwebs.splice(this.level.spiderwebs.indexOf(spiderweb), 1);
            }
        });
    }

    checkCollisionsSpearToBoar() {
        this.level.throwableObjects.forEach((spear) => {
            this.level.enemies.forEach((enemy) => {
                if (enemy.isColliding(spear)) {
                    enemy.hit();
                    enemy.hit();
                    this.level.throwableObjects.splice(this.level.throwableObjects.indexOf(spear), 1);
                    if (enemy.isDead()) {
                        this.boarDies(enemy);
                    }
                }
            });
        });
    }

    checkCollisionsSpearToEndboss() {
        this.level.throwableObjects.forEach((spear) => {
            this.level.endboss.forEach((endboss) => {
                if (endboss.isColliding(spear)) {
                    endboss.hit();
                    this.level.throwableObjects.splice(this.level.throwableObjects.indexOf(spear), 1);
                    if (endboss.isDead()) {
                        this.endbossDies(endboss);
                    }
                }
            });
        });
    }

    checkThrowing() {
        if (this.keyboard.D && this.canThrow()) {
            let spear = new ThrowableObject(this.character.x + 120, this.character.y + 80);
            this.collectedSpears--;
            this.level.throwableObjects.push(spear);
            this.lastThrowTime = Date.now();
        }
    }

    checkSpiderweb() {
        this.level.endboss.forEach((endboss) => {
            if (endboss.startThrow && this.canThrow() && this.amountOfSpiderwebs > 0) {
                let spiderweb = new Spiderweb();
                this.amountOfSpiderwebs--;
                this.level.spiderwebs.push(spiderweb);
                this.lastThrowTime = Date.now();
            }
        });
    }

    checkCoinCollect() {
        for (let i = 0; i < this.level.coinCollect.length; i++) {
            let coin = this.level.coinCollect[i];
            if (this.character.isColliding(coin)) {
                this.coincollectSound.play();
                this.collectedCoins++;
                this.level.coinCollect.splice(i, 1);
                i--;
            }
        }
    }

    checkSpearCollect() {
        for (let i = 0; i < this.level.spearCollect.length; i++) {
            let spear = this.level.spearCollect[i];
            if (this.character.isColliding(spear)) {
                this.spearcollectSound.play();
                this.collectedSpears++;
                this.level.spearCollect.splice(i, 1);
                i--;
            }
        }
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

    checkGameIsOver() {
        if (this.character.isDead()) {
            this.keyboard.isLocked = true;
            this.gameFinished = true;
            setTimeout(() => {
                this.showEndscreen();
            }, 1000);
            
        } 
        this.level.endboss.forEach((endboss) => {
            if (endboss.isDead() ) { //&& this.treasureCollected
                this.keyboard.isLocked = true;
                this.gameFinished = true;
                this.playerWins = true;
                setTimeout(() => {
                    this.showEndscreen();
                }, 1000);
            }
        });
    }

    checkDistanceToEnemies() {
        let threshold = 600;
        this.level.enemies.forEach((enemy) => {
            let distance = Math.abs(this.character.x - enemy.x);
            if (distance < threshold && !enemy.soundPlayed) {
                if (enemy.gruntingSound) {
                    enemy.gruntingSound.play();
                    enemy.soundPlayed = true;
                }
            }
        });
    }

    checkDistanceToObstacles() {
        let threshold = 300;
        this.level.obstacles.forEach((obstacle) => {
            let distance = Math.abs(this.character.x - obstacle.x);
            if (distance < threshold) {
                obstacle.activateSpikes = true;
            } else if (distance > threshold) {
                obstacle.activateSpikes = false;
            }
        });
    }

    checkDistanceToEndboss() {
        let startAttackAt = 300;
        let startHitAt = 95;
        this.level.endboss.forEach((endboss) => {
            let distance = Math.abs(this.character.x - endboss.x);
            if (distance <= startAttackAt && !endboss.soundPlayed) {
                if (endboss.encounterSound) {
                    endboss.encounterSound.play();
                    endboss.soundPlayed = true;
                    endboss.startAttack = true;
                }
            } else if (distance >= startHitAt) {
                endboss.startHit = false;
                if (distance > startAttackAt) {
                    endboss.soundPlayed = false;
                }
            }
            if (distance <= startHitAt && endboss.startAttack) {
                endboss.startHit = true;
            }
        });
    }

    showEndscreen() {
        if(this.gameFinished) {
            document.getElementById('endScreenOverlay').style.display = 'flex';
            document.getElementById('optionsOverlay').style.display = 'none';
            if(this.playerWins) {
                document.getElementById('endScreenOverlayWin').style.display = 'block';
            } else {
                document.getElementById('endScreenOverlayLose').style.display = 'block';
            }
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
        this.addObjectsToMap(this.level.obstacles);
        this.addObjectsToMap(this.level.platforms);

        this.ctx.translate(-this.cameraX, 0);
        this.statusbar.draw(this.ctx);
        this.spearCount.draw(this.ctx);
        this.spearDisplay.draw(this.ctx);
        this.coinDisplay.draw(this.ctx);
        this.coinCount.draw(this.ctx);
        this.ctx.translate(this.cameraX, 0);

        this.character.draw(this.ctx);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.endboss);
        this.addObjectsToMap(this.level.birds);
        this.addObjectsToMap(this.level.throwableObjects);
        this.addObjectsToMap(this.level.spiderwebs);

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

    boarDies(enemy) {
        const removeBoar = this.level.enemies.indexOf(enemy);
        setTimeout(() => {
            this.level.enemies.splice(removeBoar, 1);
        }, 500);
    }

    endbossDies(endboss) {
        const removeEndboss = this.level.endboss.indexOf(endboss);
        setTimeout(() => {
            this.level.endboss.splice(removeEndboss, 1);
        }, 1500);
    }
}
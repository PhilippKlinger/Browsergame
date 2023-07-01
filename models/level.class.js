class Level {
    enemies;
    birds;
    throwableObjects;
    backgroundObjects;
   
    levelEndpointX = 5100;

    constructor(enemies, birds,throwableObjects, backgroundObjects) {
        this.enemies = enemies;
        this.birds = birds;
        this.throwableObjects = throwableObjects;
        this.backgroundObjects = backgroundObjects;
    }
}
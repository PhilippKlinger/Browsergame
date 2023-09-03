class Level {
    enemies;
    birds;
    throwableObjects;
    backgroundObjects;
    spearCollect;
    coinCollect;

    levelEndpointX = 5100;

    constructor(enemies, birds,throwableObjects, backgroundObjects, spearCollect, coinCollect) {
        this.enemies = enemies;
        this.birds = birds;
        this.throwableObjects = throwableObjects;
        this.backgroundObjects = backgroundObjects;
        this.spearCollect = spearCollect;
        this.coinCollect = coinCollect;
    }
}
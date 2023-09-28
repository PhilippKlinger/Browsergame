class Level {
    enemies;
    endboss;
    birds;
    throwableObjects;
    spiderwebs;
    backgroundObjects;
    spearCollect;
    coinCollect;
    obstacles;
    platforms;

    levelEndpointX = 4900;

    constructor(enemies, endboss, birds, throwableObjects, spiderwebs, backgroundObjects, spearCollect, coinCollect, obstacles, platforms) {
        this.enemies = enemies;
        this.endboss = endboss;
        this.birds = birds;
        this.throwableObjects = throwableObjects;
        this.spiderwebs = spiderwebs;
        this.backgroundObjects = backgroundObjects;
        this.spearCollect = spearCollect;
        this.coinCollect = coinCollect;
        this.obstacles = obstacles;
        this.platforms = platforms;
    }
}
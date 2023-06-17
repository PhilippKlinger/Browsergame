class Level {
    enemies;
    birds;
    backgroundObjects;
    levelEndpointX = 1600;

    constructor(enemies, birds, backgroundObjects) {
        this.enemies = enemies;
        this.birds = birds;
        this.backgroundObjects = backgroundObjects;
    }
}
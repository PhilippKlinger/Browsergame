class Boar extends MoveableObject {

    constructor() {
        super().loadImage('./img/3_enemies_boar/boar/Walking/Walking_000.png');
        this.x = 200 + Math.random() * 400;
    }

    
}
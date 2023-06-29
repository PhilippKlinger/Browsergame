class Keyboard {
  
    NOKEY = true;
    isLocked = false;

    isKeyPressed() {
        return (
            this.ARROWLEFT ||
            this.ARROWRIGHT ||
            this.ARROWUP ||
            this.ARROWDOWN ||
            this.SPACE ||
            this.W ||
            this.A ||
            this.S ||
            this.D ||
            this.H
        );
}
}
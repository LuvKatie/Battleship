class Ship {
    constructor(length, health, sunk) {
        this.length = length;
        this.health = health;
        this.sunk = sunk;
    }

    hit() {
        this.health += 1;
    }

    isSunk() {
        this.health == this.length ? this.sunk = true : this.sunk = false;
    }
}
const {Gameboard} = require('./gameboard');

describe("Gameboard class", () => {
    const testGB = new Gameboard();

    test("correct position and direction", () => {
        expect(testGB.placeShip(4, "up")).toEqual([4, "up"]);
    });

    test("hit on correct cordinates", () => {
        expect(testGB.receiveAttack([4, "up"])).toEqual("hit");
    });

    test("miss increment on attack miss", () => {
        // Incorrect cordinates to simulate a miss
        testGB.receiveAttack([2, "down"]);

        expect(testGB.miss).toEqual(1);
    });
});
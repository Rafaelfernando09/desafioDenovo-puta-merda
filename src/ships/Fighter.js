"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Figther = void 0;
const SpaceCraft_1 = require("./SpaceCraft");
class Figther extends SpaceCraft_1.SpaceCraft {
    constructor(laserString, id, name, health, fuel) {
        super(id, name, fuel, health);
        this.laserString = laserString;
    }
    getLaser() {
        return this.laserString;
    }
    setLaser(value) {
        this.laserString = value;
    }
    attack(target) {
        const damage = 25;
        target.takeDamage(damage);
        return damage;
    }
}
exports.Figther = Figther;

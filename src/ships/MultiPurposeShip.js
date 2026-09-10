"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiPurposeShip = void 0;
const SpaceCraft_1 = require("./SpaceCraft");
class MultiPurposeShip extends SpaceCraft_1.SpaceCraft {
    constructor(id, name, fuel, cargoCapacity, weaponPower, health) {
        super(id, name, fuel, health);
        this.cargoCapacity = cargoCapacity;
        this.currentCargo = 0;
        this.weaponPower = weaponPower;
    }
    loadCargo(amount) {
        if (this.currentCargo + amount >= this.cargoCapacity) {
            this.currentCargo = this.cargoCapacity;
        }
        else {
            this.currentCargo += amount;
        }
    }
    unloadCargo(amount) {
        if (this.currentCargo - amount <= 0) {
            this.currentCargo = 0;
        }
        else {
            this.currentCargo -= amount;
        }
    }
    getCargoCapacity() {
        return this.cargoCapacity;
    }
    getCurrentCargo() {
        return this.currentCargo;
    }
    explore(location) {
        return `the spacecraft began its journey to ${location}!`;
    }
    collectData() {
        return `Scientific data were collected during this expedition!`;
    }
    attack(target) {
        if (!this.isOperational()) {
            return 0;
        }
        const damage = this.weaponPower;
        target.takeDamage(damage);
        return damage;
    }
}
exports.MultiPurposeShip = MultiPurposeShip;

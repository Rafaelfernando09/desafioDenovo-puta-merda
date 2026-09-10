"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransportShip = void 0;
const SpaceCraft_1 = require("./SpaceCraft");
class TransportShip extends SpaceCraft_1.SpaceCraft {
    constructor(currentCargo, cargoCapacity, id, name, health, fuel) {
        super(id, name, fuel, health);
        this.cargoCapacity = 500;
        this.currentCargo = 0;
        this.cargoCapacity = cargoCapacity;
        this.currentCargo = currentCargo;
    }
    getCargoCapacity() {
        return this.cargoCapacity;
    }
    setCargoCapacity(value) {
        if (value < 0) {
            this.cargoCapacity = 0;
        }
        else {
            this.cargoCapacity = value;
        }
    }
    getCurrentCargo() {
        return this.currentCargo;
    }
    setCurrentCargo(value) {
        if (value < 0) {
            this.currentCargo = 0;
        }
        else if (value > this.cargoCapacity) {
            this.currentCargo = this.cargoCapacity;
        }
        else {
            this.currentCargo = value;
        }
    }
    loadCargo(amount) {
        if (this.currentCargo + amount > this.cargoCapacity) {
            return;
        }
        else
            this.currentCargo += amount;
    }
    unloadCargo(amount) {
        if (this.currentCargo - amount < 0) {
            this.currentCargo = 0;
        }
        else {
            this.currentCargo -= amount;
        }
    }
}
exports.TransportShip = TransportShip;

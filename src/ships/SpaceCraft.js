"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpaceCraft = void 0;
class SpaceCraft {
    constructor(id, name, fuel, health) {
        this.id = id;
        this.name = name;
        this.fuel = fuel;
        this.health = health;
    }
    getId() {
        return this.id;
    }
    setId(value) {
        this.id = value;
    }
    getName() {
        return this.name;
    }
    setName(value) {
        this.name = value;
    }
    getFuel() {
        return this.fuel;
    }
    setFuel(value) {
        if (this.fuel <= 0) {
            this.fuel = 0;
        }
        else
            this.fuel = value;
    }
    getHealth() {
        return this.health;
    }
    setHealth(value) {
        this.health = value;
    }
    refuel(value) {
        this.fuel += value;
        console.log(`The fuel: ${this.fuel}`);
    }
    takeDamage(value) {
        if (this.health <= 0) {
            this.health = 0;
        }
        else
            this.health -= value;
        console.log(`The ship has Sofreed damage: ${this.health}`);
    }
    repair(value) {
        if (this.health >= 100) {
            this.health = 100;
        }
        else
            this.health += value;
        console.log(`The ship as repaired to: ${this.health} on health`);
    }
    isOperational() {
        if (this.health > 0 && this.fuel > 0) {
            return true;
        }
        else {
            return false;
        }
    }
    showStatus() {
        console.log(`
=================================        
    Ship Id: ${this.id}
    Ship Name: ${this.name}
    Ship Health ${this.health}
    Ship Fuel: ${this.fuel}  `);
    }
}
exports.SpaceCraft = SpaceCraft;

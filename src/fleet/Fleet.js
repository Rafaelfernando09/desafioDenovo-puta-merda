"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fleet = void 0;
const SpaceCraft_1 = require("../ships/SpaceCraft");
const TransportShip_1 = require("../ships/TransportShip");
const ExplorationShip_1 = require("../ships/ExplorationShip");
class Fleet extends SpaceCraft_1.SpaceCraft {
    constructor(id, name, fuel, health, fleetOfShips) {
        super(id, name, fuel, health);
        this.fleetOfShips = [];
    }
    addShip(ship) {
        this.fleetOfShips.push(ship);
    }
    removeShip(id) {
        for (let ship of this.fleetOfShips) {
            if (ship.getId() === id) {
                this.fleetOfShips.splice(id);
            }
        }
    }
    findShip(id) {
        for (let ship of this.fleetOfShips) {
            if (ship.getId() === id) {
                return this.fleetOfShips[id];
            }
            else {
                return;
            }
        }
    }
    showFleet() {
        for (let ship of this.fleetOfShips) {
            let i = 0;
            console.log(`
            Ship id: ${ship.getId()}
            Ship Name: ${ship.getName()}
            Ship Fuel: ${ship.getFuel()}
            Ship Health: ${ship.getHealth()}`);
            i++;
        }
    }
    getCombatShips() {
        let finalAnswer = [];
        for (let ship of this.fleetOfShips) {
            if (typeof ship.attack === "function") {
                finalAnswer.push(ship);
            }
        }
        return finalAnswer;
    }
    getCargoShips() {
        return this.fleetOfShips.filter(function (ship) {
            return ship instanceof TransportShip_1.TransportShip;
        });
    }
    getExplorationShips() {
        return this.fleetOfShips.filter(function (ship) {
            return ship instanceof ExplorationShip_1.ExplorationShip;
        });
    }
}
exports.Fleet = Fleet;

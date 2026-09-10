"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExplorationShip = void 0;
const SpaceCraft_1 = require("./SpaceCraft");
class ExplorationShip extends SpaceCraft_1.SpaceCraft {
    constructor(id, name, fuel, health) {
        super(id, name, fuel, health);
    }
    explore(location) {
        return `the ${location} haas been explored sucessfully`;
    }
    collectData() {
        return `cientify data collected.`;
    }
}
exports.ExplorationShip = ExplorationShip;

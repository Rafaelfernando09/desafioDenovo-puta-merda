import { CargoCarrier } from "../interfaces/CargoCarrier";
import { CombatCapable } from "../interfaces/CombatCapable";
import { SpaceCraft } from "../ships/SpaceCraft";
import { Exploratory } from "../interfaces/Exploratory";
import { Figther } from "../ships/Fighter";
import { TransportShip } from "../ships/TransportShip";
import { ExplorationShip } from "../ships/ExplorationShip";


export class Fleet extends SpaceCraft {

    private fleetOfShips: SpaceCraft[]

    public constructor(id: number, name: string, fuel: number, health: number, fleetOfShips: []) {
        super(id, name, fuel, health)
        this.fleetOfShips = []
    }

    public addShip(ship: SpaceCraft): void {
        this.fleetOfShips.push(ship)
    }

    public removeShip(id: number): void {
        for (let ship of this.fleetOfShips) {
            if (ship.getId() === id) {
                this.fleetOfShips.splice(id)
            }
        }
    }

    public findShip(id: number): SpaceCraft | undefined {
        for (let ship of this.fleetOfShips) {
            if (ship.getId() === id) {
                return this.fleetOfShips[id]
            } else {
                return
            }
        }
    }

    public showFleet(): void {
        for (let ship of this.fleetOfShips) {
            let i = 0
            console.log(`
            Ship id: ${ship.getId()}
            Ship Name: ${ship.getName()}
            Ship Fuel: ${ship.getFuel()}
            Ship Health: ${ship.getHealth()}`)
            i++
        }
    }

    

}